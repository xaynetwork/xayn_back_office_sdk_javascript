/**
 * Back Office API
 * # Back Office The back office is typically used within server-side apps. This SDK acts as a create/read/update/delete interface for anything related to documents.  ## Document By document, we refer to a cohesive text, for example a complete news article. However, we only require a simple representation for our system to work. Consisting just of a unique ID, a text snippet and optional properties. The text snippet is ideally a short, meaningful representation of the larger document, reduced to just one paragraph.  ### Id The document_id is a unique identifier for a single document. We don't require a specific format, it just needs to comply to the following regexp: `^[a-zA-Z0-9_:@.-]+$`.  ## Snippet A snippet is a reduced representation of a larger text, for example if the document would be a news article, then its text would be the news article in a pure textual format. In order for our system to work correctly, it is important that the snippet is just the size of one or two paragraphs, and that the snippet's text clearly summarises the larger text. For example, let's take a news article which talks about the effects of inflation. Our snippet could then be: \"Inflation worries as prices keep rising. People having budgetary difficulties as a result. Government pressured to take action.\". A bad snippet would for example be just taking the very first paragraph of a document, which could sometimes work, but could also lead to: \"December 20th 2020. Article written by Jane Doe. On this bright and sunny day, people might forget about their worries sometimes.\"  ## Properties Properties are optional entries for documents, which are usually needed to properly show the document back to the user, when it returns as a personalized document. If for example, you'd wish to integrate a type of carousel view, listing a total of 10 personalized documents in a \"for you\"-section, then you might choose to display each document as an image and title, with a url to link the user to when pressed. For this, you would need three document properties: `image`, `link` and `title`. You are free to add as many properties as needed.  ## Auth The API requires an authentication token when used. Please see further down in this README.md file, or refer to the test included in this SDK's codebase, on how to set this token correctly. \\
 *
 * The version of the OpenAPI document: 1.0.0-rc6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DocumentPropertyRequest model module.
 * @module model/DocumentPropertyRequest
 * @version 1.0.19
 */
class DocumentPropertyRequest {
    /**
     * Constructs a new <code>DocumentPropertyRequest</code>.
     * @alias module:model/DocumentPropertyRequest
     * @param property {Object} Arbitrary property that can be attached to a document.
     */
    constructor(property) { 
        
        DocumentPropertyRequest.initialize(this, property);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, property) { 
        obj['property'] = property;
    }

    /**
     * Constructs a <code>DocumentPropertyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentPropertyRequest} obj Optional instance to populate.
     * @return {module:model/DocumentPropertyRequest} The populated <code>DocumentPropertyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentPropertyRequest();

            if (data.hasOwnProperty('property')) {
                obj['property'] = ApiClient.convertToType(data['property'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DocumentPropertyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DocumentPropertyRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DocumentPropertyRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

DocumentPropertyRequest.RequiredProperties = ["property"];

/**
 * Arbitrary property that can be attached to a document.
 * @member {Object} property
 */
DocumentPropertyRequest.prototype['property'] = undefined;






export default DocumentPropertyRequest;

