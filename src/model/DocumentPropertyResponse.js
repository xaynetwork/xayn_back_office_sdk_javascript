/**
 * Back Office API
 * # Back Office For this system, a document is anything that has an id, a snippet, and an arbitrary set of properties. The id uniquely identifies the document in the system. The system uses the snippet to create a document representation that can be matched against user interests.  It is possible to attach any properties to a document; the system will not use them but will be returned together with the document when asking for personalized documents for a user. They could help store information like a title and the URL where it is possible to find the document. Each document can have its own set of properties.  The API offers an endpoint that allows uploading the documents to the system. After a successful upload, it will be possible to use the document in other endpoints.  # Auth To authenticate with the API, a token will be provided.
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
 * The DocumentPropertyResponse model module.
 * @module model/DocumentPropertyResponse
 * @version 1.0.14
 */
class DocumentPropertyResponse {
    /**
     * Constructs a new <code>DocumentPropertyResponse</code>.
     * @alias module:model/DocumentPropertyResponse
     * @param property {Object} Arbitrary property that can be attached to a document.
     */
    constructor(property) { 
        
        DocumentPropertyResponse.initialize(this, property);
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
     * Constructs a <code>DocumentPropertyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentPropertyResponse} obj Optional instance to populate.
     * @return {module:model/DocumentPropertyResponse} The populated <code>DocumentPropertyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentPropertyResponse();

            if (data.hasOwnProperty('property')) {
                obj['property'] = ApiClient.convertToType(data['property'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DocumentPropertyResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DocumentPropertyResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DocumentPropertyResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

DocumentPropertyResponse.RequiredProperties = ["property"];

/**
 * Arbitrary property that can be attached to a document.
 * @member {Object} property
 */
DocumentPropertyResponse.prototype['property'] = undefined;






export default DocumentPropertyResponse;

