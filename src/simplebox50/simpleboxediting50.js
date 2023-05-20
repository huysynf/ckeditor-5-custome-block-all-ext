// simplebox/simpleboxediting.js

import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget, toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget';
import InsertSimpleBoxCommand50 from './insertsimpleboxcommand50';                 // ADDED

export default class SimpleBoxEditing50 extends Plugin {
    static get requires() {
        return [ Widget ];
    }

    init() {
        console.log( 'SimpleBoxEditing#init() got called' );

        this._defineSchema();
        this._defineConverters();

        this.editor.commands.add( 'insertSimpleBox50', new InsertSimpleBoxCommand50( this.editor ) );
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register( 'simpleBox50', {
            // Behaves like a self-contained block object (e.g. a block image)
            // allowed in places where other blocks are allowed (e.g. directly in the root).
            inheritAllFrom: '$blockObject'
        } );

        schema.register( 'simpleBoxDescription50', {
            // Cannot be split or left by the caret.
            isLimit: true,

            allowIn: 'simpleBox50',

            // Allow content which is allowed in the root (e.g. paragraphs).
            allowContentOf: '$root'
        } );

        schema.addChildCheck( ( context, childDefinition ) => {
            if ( context.endsWith( 'simpleBoxDescription50' ) && childDefinition.name == 'simpleBox50' ) {
                return false;
            }
        } );
    }

    _defineConverters() {
        const conversion = this.editor.conversion;

        // <simpleBox> converters
        conversion.for( 'upcast' ).elementToElement( {
            model: 'simpleBox50',
            view: {
                name: 'section',
                classes: 'simple-box50'
            }
        } );
        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'simpleBox50',
            view: {
                name: 'section',
                classes: 'simple-box50'
            }
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'simpleBox50',
            view: ( modelElement, { writer: viewWriter } ) => {
                const section = viewWriter.createContainerElement( 'section', { class: 'simple-box50' } );

                return toWidget( section, viewWriter, { label: 'simple box widget50' } );
            }
        } );

        // <simpleBoxTitle> converters
    

        // <simpleBoxDescription> converters
        conversion.for( 'upcast' ).elementToElement( {
            model: 'simpleBoxDescription50',
            view: {
                name: 'div',
                classes: 'simple-box-description50'
            }
        } );
        conversion.for( 'dataDowncast' ).elementToElement( {
            model: 'simpleBoxDescription50',
            view: {
                name: 'div',
                classes: 'simple-box-description50'
            }
        } );
        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'simpleBoxDescription50',
            view: ( modelElement, { writer: viewWriter } ) => {
                // Note: You use a more specialized createEditableElement() method here.
                const div = viewWriter.createEditableElement( 'div', { class: 'simple-box-description50' } );

                return toWidgetEditable( div, viewWriter );
            }
        } );
    }
}
