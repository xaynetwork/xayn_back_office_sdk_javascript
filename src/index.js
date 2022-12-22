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


import ApiClient from './ApiClient';
import DeleteDocumentsRequest from './model/DeleteDocumentsRequest';
import DocumentPropertiesRequest from './model/DocumentPropertiesRequest';
import DocumentPropertiesResponse from './model/DocumentPropertiesResponse';
import DocumentPropertyRequest from './model/DocumentPropertyRequest';
import DocumentPropertyResponse from './model/DocumentPropertyResponse';
import GenericError from './model/GenericError';
import IngestedDocument from './model/IngestedDocument';
import IngestionError from './model/IngestionError';
import IngestionErrorAllOf from './model/IngestionErrorAllOf';
import IngestionErrorAllOfDetails from './model/IngestionErrorAllOfDetails';
import IngestionErrorAllOfDetailsDocuments from './model/IngestionErrorAllOfDetailsDocuments';
import IngestionRequest from './model/IngestionRequest';
import BackOfficeApi from './com.xayn.backoffice/BackOfficeApi';


/**
* # Back Office For this system, a document is anything that has an id, a snippet, and an arbitrary set of properties. The id uniquely identifies the document in the system. The system uses the snippet to create a document representation that can be matched against user interests.  It is possible to attach any properties to a document; the system will not use them but will be returned together with the document when asking for personalized documents for a user. They could help store information like a title and the URL where it is possible to find the document. Each document can have its own set of properties.  The API offers an endpoint that allows uploading the documents to the system. After a successful upload, it will be possible to use the document in other endpoints.  # Auth To authenticate with the API, a token will be provided..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var XaynBackOfficeSdk = require('index'); // See note below*.
* var xxxSvc = new XaynBackOfficeSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new XaynBackOfficeSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new XaynBackOfficeSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new XaynBackOfficeSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.13
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The DeleteDocumentsRequest model constructor.
     * @property {module:model/DeleteDocumentsRequest}
     */
    DeleteDocumentsRequest,

    /**
     * The DocumentPropertiesRequest model constructor.
     * @property {module:model/DocumentPropertiesRequest}
     */
    DocumentPropertiesRequest,

    /**
     * The DocumentPropertiesResponse model constructor.
     * @property {module:model/DocumentPropertiesResponse}
     */
    DocumentPropertiesResponse,

    /**
     * The DocumentPropertyRequest model constructor.
     * @property {module:model/DocumentPropertyRequest}
     */
    DocumentPropertyRequest,

    /**
     * The DocumentPropertyResponse model constructor.
     * @property {module:model/DocumentPropertyResponse}
     */
    DocumentPropertyResponse,

    /**
     * The GenericError model constructor.
     * @property {module:model/GenericError}
     */
    GenericError,

    /**
     * The IngestedDocument model constructor.
     * @property {module:model/IngestedDocument}
     */
    IngestedDocument,

    /**
     * The IngestionError model constructor.
     * @property {module:model/IngestionError}
     */
    IngestionError,

    /**
     * The IngestionErrorAllOf model constructor.
     * @property {module:model/IngestionErrorAllOf}
     */
    IngestionErrorAllOf,

    /**
     * The IngestionErrorAllOfDetails model constructor.
     * @property {module:model/IngestionErrorAllOfDetails}
     */
    IngestionErrorAllOfDetails,

    /**
     * The IngestionErrorAllOfDetailsDocuments model constructor.
     * @property {module:model/IngestionErrorAllOfDetailsDocuments}
     */
    IngestionErrorAllOfDetailsDocuments,

    /**
     * The IngestionRequest model constructor.
     * @property {module:model/IngestionRequest}
     */
    IngestionRequest,

    /**
    * The BackOfficeApi service constructor.
    * @property {module:com.xayn.backoffice/BackOfficeApi}
    */
    BackOfficeApi
};
