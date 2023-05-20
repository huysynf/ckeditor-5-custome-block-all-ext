// simplebox/insertsimpleboxcommand.js

import { Command } from '@ckeditor/ckeditor5-core';

export default class InsertSimpleBoxCommand50 extends Command {
    execute() {
        this.editor.model.change( writer => {
            // Insert <simpleBox>*</simpleBox> at the current selection position
            // in a way that will result in creating a valid model structure.
            this.editor.model.insertObject( createSimpleBox50( writer ) );
        } );
    }
    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;
        const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), 'simpleBox50' );

        this.isEnabled = allowedIn !== null;
    }
}

function createSimpleBox50( writer ) {
    const simpleBox = writer.createElement( 'simpleBox50' );
    const simpleBoxDescription = writer.createElement( 'simpleBoxDescription50' );

    writer.append( simpleBoxDescription, simpleBox );

    // There must be at least one paragraph for the description to be editable.
    // See https://github.com/ckeditor/ckeditor5/issues/1464.
    writer.appendElement( 'paragraph', simpleBoxDescription );

    return simpleBox;
}
