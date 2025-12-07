#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const jsx = require('acorn-jsx');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Bitte geben Sie Ihren Namen ein: ', async (name) => {
  console.log(`Hallo, ${name}! Extrahiere Button-Daten aus App.js...`);

  const appJsPath = path.join(__dirname, '..', 'calculator', 'App.js');
  const code = fs.readFileSync(appJsPath, 'utf-8');

  const parser = acorn.Parser.extend(jsx());
  const ast = parser.parse(code, { ecmaVersion: 2020, sourceType: 'module', allowImportExportEverywhere: true });

  const buttons = [];
  let styles = null;

  function traverse(node) {
    if (node.type === 'JSXElement' && node.openingElement.name.name === 'Button') {
      const props = {};
      node.openingElement.attributes.forEach(attr => {
        if (attr.type === 'JSXAttribute') {
          const name = attr.name.name;
          let value;
          if (attr.value.type === 'Literal') {
            value = attr.value.value;
          } else if (attr.value.type === 'JSXExpressionContainer') {
            // For pressHandler, get the raw source
            const start = attr.value.expression.start;
            const end = attr.value.expression.end;
            value = code.substring(start, end);
          }
          props[name] = value;
        }
      });
      buttons.push(props);
    } else if (node.type === 'VariableDeclaration') {
      node.declarations.forEach(decl => {
        if (decl.id.name === 'styles' && decl.init && decl.init.type === 'CallExpression' && decl.init.callee.object.name === 'StyleSheet' && decl.init.callee.property.name === 'create') {
          const arg = decl.init.arguments[0];
          if (arg.type === 'ObjectExpression') {
            styles = {};
            arg.properties.forEach(prop => {
              if (prop.type === 'Property' && prop.key.type === 'Identifier') {
                const key = prop.key.name;
                let value;
                if (prop.value.type === 'ObjectExpression') {
                  value = {};
                  prop.value.properties.forEach(p => {
                    if (p.type === 'Property' && p.key.type === 'Identifier') {
                      value[p.key.name] = p.value.type === 'Literal' ? p.value.value : p.value.raw || JSON.stringify(p.value);
                    }
                  });
                } else if (prop.value.type === 'ArrayExpression') {
                  value = prop.value.elements.map(el => el.type === 'Literal' ? el.value : el.raw || JSON.stringify(el));
                } else if (prop.value.type === 'Literal') {
                  value = prop.value.value;
                } else {
                  value = prop.value.raw || JSON.stringify(prop.value);
                }
                styles[key] = value;
              }
            });
          }
        }
      });
    }
    for (const key in node) {
      if (node[key] && typeof node[key] === 'object') {
        if (Array.isArray(node[key])) {
          node[key].forEach(traverse);
        } else {
          traverse(node[key]);
        }
      }
    }
  }

  traverse(ast);

  const result = { buttons, styles };
  // filter buttons presshandlers on buttons . 0 =
  result.buttons = result.buttons.map(btn => {
    if (btn.text === "." ) {
      btn.pressHandler = '() => setDisplay(display + ".");';
    }
    if (btn.text === "0" ) {
        btn.pressHandler = '() => setDisplay(prev => prev + "0");';
    }
    if (btn.text === "=" ) {
        btn.pressHandler = '() => equalsHandler()';
    }
    return btn;
  });



  // === Upload here ===


  const body = JSON.stringify({
        name: name,
        data: result
    })

  try {
  const response = await fetch("https://theme.einsluca.top/theme/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })

  if (!response.ok) {
    console.error("Fehler beim Hochladen der Daten:", response.statusText);
    return;
  }

  const responseData = await response.json();

    console.log("Daten erfolgreich hochgeladen! Ihre Theme-ID ist:", responseData.code);

    rl.close();
    } catch (error) {
    console.error("Fehler beim Hochladen der Daten:", error);
    rl.close();
    return;
  }

});