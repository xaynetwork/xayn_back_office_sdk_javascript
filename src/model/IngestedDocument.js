/**
 * Back Office API
 * # Back Office For this system, a document is anything that has an id, a snippet, and an arbitrary set of properties. The id uniquely identifies the document in the system. The system uses the snippet to create a document representation that can be matched against user interests.  It is possible to attach any properties to a document; the system will not use them but will be returned together with the document when asking for personalized documents for a user. They could help store information like a title and the URL where it is possible to find the document. Each document can have its own set of properties.  The API offers an endpoint that allows uploading the documents to the system. After a successful upload, it will be possible to use the document in other endpoints.  # Auth To authenticate with the API, a token will be provided.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The IngestedDocument model module.
 * @module model/IngestedDocument
 * @version v1.0.11
 */
class IngestedDocument {
    /**
     * Constructs a new <code>IngestedDocument</code>.
     * @alias module:model/IngestedDocument
     * @param id {String} A document id can be any non-empty UTF-8 string that does not contain the null byte. It may consist of digits, Latin letters, underscores, colons, minus signs, at signs, and dots.
     * @param snippet {String} Text that will be used to match the document against the user interests.
     */
    constructor(id, snippet) { 
        
        IngestedDocument.initialize(this, id, snippet);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, snippet) { 
        obj['id'] = id;
        obj['snippet'] = snippet;
    }

    /**
     * Constructs a <code>IngestedDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IngestedDocument} obj Optional instance to populate.
     * @return {module:model/IngestedDocument} The populated <code>IngestedDocument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IngestedDocument();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('snippet')) {
                obj['snippet'] = ApiClient.convertToType(data['snippet'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IngestedDocument</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IngestedDocument</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IngestedDocument.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['snippet'] && !(typeof data['snippet'] === 'string' || data['snippet'] instanceof String)) {
            throw new Error("Expected the field `snippet` to be a primitive type in the JSON string but got " + data['snippet']);
        }

        return true;
    }


}

IngestedDocument.RequiredProperties = ["id", "snippet"];

/**
 * A document id can be any non-empty UTF-8 string that does not contain the null byte. It may consist of digits, Latin letters, underscores, colons, minus signs, at signs, and dots.
 * @member {String} id
 */
IngestedDocument.prototype['id'] = undefined;

/**
 * Text that will be used to match the document against the user interests.
 * @member {String} snippet
 */
IngestedDocument.prototype['snippet'] = undefined;

/**
 * Arbitrary properties that can be attached to a document. A key must be a valid `DocumentPropertyId`.
 * @member {Object.<String, Object>} properties
 */
IngestedDocument.prototype['properties'] = undefined;






export default IngestedDocument;

