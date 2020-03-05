import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function demo(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create('demo.js', `console.log('${_options.name}');`);
    return tree;
  };
}

interface Schema {
  name: string;
}