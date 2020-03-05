import { Rule, SchematicContext, Tree, apply, url, template, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function demo(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log(_options.name);
    tree.create('demo.js', `console.log('${_options.name}');`);
    return tree;
  };
}

export function createCompoent(_options: any): Rule {
  return () => {
    // console.log(strings);
    const templates = apply(url('./files'), [
      template({
        ..._options,
        ...strings
      })
    ]);
    console.log(templates.toString());
    return mergeWith(templates);
  };
}

interface Schema {
  name: string;
}