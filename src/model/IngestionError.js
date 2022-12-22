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
import GenericError from './GenericError';
import IngestionErrorAllOf from './IngestionErrorAllOf';
import IngestionErrorAllOfDetails from './IngestionErrorAllOfDetails';

/**
 * The IngestionError model module.
 * @module model/IngestionError
 * @version 1.0.13
 */
class IngestionError {
    /**
     * Constructs a new <code>IngestionError</code>.
     * @alias module:model/IngestionError
     * @implements module:model/GenericError
     * @implements module:model/IngestionErrorAllOf
     * @param details {module:model/IngestionErrorAllOfDetails} 
     */
    constructor(details) { 
        GenericError.initialize(this);IngestionErrorAllOf.initialize(this, details);
        IngestionError.initialize(this, details);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, details) { 
        obj['details'] = details;
    }

    /**
     * Constructs a <code>IngestionError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IngestionError} obj Optional instance to populate.
     * @return {module:model/IngestionError} The populated <code>IngestionError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IngestionError();
            GenericError.constructFromObject(data, obj);
            IngestionErrorAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = IngestionErrorAllOfDetails.constructFromObject(data['details']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IngestionError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IngestionError</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IngestionError.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `details`
        if (data['details']) { // data not null
          IngestionErrorAllOfDetails.validateJSON(data['details']);
        }

        return true;
    }


}

IngestionError.RequiredProperties = ["details"];

/**
 * Request ID optionally generated from the service. It can be communicated to xayn to help debugging.
 * @member {String} request_id
 */
IngestionError.prototype['request_id'] = undefined;

/**
 * What kind of error this is.
 * @member {String} kind
 */
IngestionError.prototype['kind'] = undefined;

/**
 * @member {module:model/IngestionErrorAllOfDetails} details
 */
IngestionError.prototype['details'] = undefined;


// Implement GenericError interface:
/**
 * Request ID optionally generated from the service. It can be communicated to xayn to help debugging.
 * @member {String} request_id
 */
GenericError.prototype['request_id'] = undefined;
/**
 * What kind of error this is.
 * @member {String} kind
 */
GenericError.prototype['kind'] = undefined;
/**
 * Additional error details. Might differ depending on debug options.
 * @member {Object} details
 */
GenericError.prototype['details'] = undefined;
// Implement IngestionErrorAllOf interface:
/**
 * @member {module:model/IngestionErrorAllOfDetails} details
 */
IngestionErrorAllOf.prototype['details'] = undefined;




export default IngestionError;

