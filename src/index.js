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
* # Back Office The back office is typically used within server-side apps. This SDK acts as a create/read/update/delete interface for anything related to documents.  ## Document By document, we refer to a cohesive text, for example a complete news article. However, we only require a simple representation for our system to work. Consisting just of a unique ID, a text snippet and optional properties. The text snippet is ideally a short, meaningful representation of the larger document, reduced to just one paragraph.  ### Id The document_id is a unique identifier for a single document. We don&#39;t require a specific format, it just needs to comply to the following regexp: &#x60;^[a-zA-Z0-9_:@.-]+$&#x60;.  ## Snippet A snippet is a reduced representation of a larger text, for example if the document would be a news article, then its text would be the news article in a pure textual format. In order for our system to work correctly, it is important that the snippet is just the size of one or two paragraphs, and that the snippet&#39;s text clearly summarises the larger text. For example, let&#39;s take a news article which talks about the effects of inflation. Our snippet could then be: \&quot;Inflation worries as prices keep rising. People having budgetary difficulties as a result. Government pressured to take action.\&quot;. A bad snippet would for example be just taking the very first paragraph of a document, which could sometimes work, but could also lead to: \&quot;December 20th 2020. Article written by Jane Doe. On this bright and sunny day, people might forget about their worries sometimes.\&quot;  ## Properties Properties are optional entries for documents, which are usually needed to properly show the document back to the user, when it returns as a personalized document. If for example, you&#39;d wish to integrate a type of carousel view, listing a total of 10 personalized documents in a \&quot;for you\&quot;-section, then you might choose to display each document as an image and title, with a url to link the user to when pressed. For this, you would need three document properties: &#x60;image&#x60;, &#x60;link&#x60; and &#x60;title&#x60;. You are free to add as many properties as needed.  ## Auth The API requires an authentication token when used. Please see further down in this README.md file, or refer to the test included in this SDK&#39;s codebase, on how to set this token correctly. \\.<br>
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
* @version 1.0.19
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
