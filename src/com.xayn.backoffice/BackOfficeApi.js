/**
 * Back Office API
 * # Back Office The back office is typically used within server-side apps. This SDK acts as a create/read/update/delete interface for anything related to documents.  ## Document By document, we refer to a cohesive text, for example a complete news article. However, we only require a simple representation for our system to work. Consisting just of a unique ID, a text snippet and optional properties. The text snippet is ideally a short, meaningful representation of the larger document, reduced to just one paragraph.  ### Id The document_id is a unique identifier for a single document. We don't require a specific format, it just needs to comply to the following regexp: `^[a-zA-Z0-9_:@.-]+$`.  ## Snippet A snippet is a reduced representation of a larger text, for example if the document would be a news article, then its text would be the news article in a pure textual format. In order for our system to work correctly, it is important that the snippet is just the size of one or two paragraphs, and that the snippet's text clearly summarises the larger text. For example, let's take a news article which talks about the effects of inflation. Our snippet could then be: \"Inflation worries as prices keep rising. People having budgetary difficulties as a result. Government pressured to take action.\". A bad snippet would for example be just taking the very first paragraph of a document, which could sometimes work, but could also lead to: \"December 20th 2020. Article written by Jane Doe. On this bright and sunny day, people might forget about their worries sometimes.\"  ## Properties Properties are optional entries for documents, which are usually needed to properly show the document back to the user, when it returns as a personalized document. If for example, you'd wish to integrate a type of carousel view, listing a total of 10 personalized documents in a \"for you\"-section, then you might choose to display each document as an image and title, with a url to link the user to when pressed. For this, you would need three document properties: `image`, `link` and `title`. You are free to add as many properties as needed.  ## Auth The API requires an authentication token when used. Please see further down in this README.md file, or refer to the test included in this SDK's codebase, on how to set this token correctly. \\
 *
 * The version of the OpenAPI document: 1.0.0-rc8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DeleteDocumentsRequest from '../model/DeleteDocumentsRequest';
import DocumentPropertiesRequest from '../model/DocumentPropertiesRequest';
import DocumentPropertiesResponse from '../model/DocumentPropertiesResponse';
import DocumentPropertyRequest from '../model/DocumentPropertyRequest';
import DocumentPropertyResponse from '../model/DocumentPropertyResponse';
import GenericError from '../model/GenericError';
import IngestionError from '../model/IngestionError';
import IngestionRequest from '../model/IngestionRequest';

/**
* BackOffice service.
* @module com.xayn.backoffice/BackOfficeApi
* @version 1.0.22
*/
export default class BackOfficeApi {

    /**
    * Constructs a new BackOfficeApi. 
    * @alias module:com.xayn.backoffice/BackOfficeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add documents to the system
     * Add documents to the system.  The system will create a representation of the document that will be used to match it against the preferences of a user.  **Important note:** Currently we allow up to a maximum of 100 documents per batch size. If you need to add more, then please split up the total amount of documents in separate calls, where each call contains at maximum 100 documents.  **Important note:** Documents which have no `publication_date` are not included when using the `published_after` filter. 
     * @param {module:model/IngestionRequest} ingestionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createDocumentsWithHttpInfo(ingestionRequest) {
      let postBody = ingestionRequest;
      // verify the required parameter 'ingestionRequest' is set
      if (ingestionRequest === undefined || ingestionRequest === null) {
        throw new Error("Missing the required parameter 'ingestionRequest' when calling createDocuments");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/documents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add documents to the system
     * Add documents to the system.  The system will create a representation of the document that will be used to match it against the preferences of a user.  **Important note:** Currently we allow up to a maximum of 100 documents per batch size. If you need to add more, then please split up the total amount of documents in separate calls, where each call contains at maximum 100 documents.  **Important note:** Documents which have no `publication_date` are not included when using the `published_after` filter. 
     * @param {module:model/IngestionRequest} ingestionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createDocuments(ingestionRequest) {
      return this.createDocumentsWithHttpInfo(ingestionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete the document from the system.
     * Permanently deletes the document from the system. The endpoint is idempotent. Deleting a non-existing document does not produce an error.
     * @param {String} documentId Id of the document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDocumentWithHttpInfo(documentId) {
      let postBody = null;
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocument");
      }

      let pathParams = {
        'document_id': documentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/documents/{document_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete the document from the system.
     * Permanently deletes the document from the system. The endpoint is idempotent. Deleting a non-existing document does not produce an error.
     * @param {String} documentId Id of the document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDocument(documentId) {
      return this.deleteDocumentWithHttpInfo(documentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all document properties
     * Deletes all the properties of the document.
     * @param {String} documentId Id of the document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDocumentPropertiesWithHttpInfo(documentId) {
      let postBody = null;
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocumentProperties");
      }

      let pathParams = {
        'document_id': documentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/documents/{document_id}/properties', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete all document properties
     * Deletes all the properties of the document.
     * @param {String} documentId Id of the document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDocumentProperties(documentId) {
      return this.deleteDocumentPropertiesWithHttpInfo(documentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a document property
     * Deletes the property of the document.
     * @param {String} documentId Id of the document
     * @param {String} propertyId Id of the document property
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDocumentPropertyWithHttpInfo(documentId, propertyId) {
      let postBody = null;
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocumentProperty");
      }
      // verify the required parameter 'propertyId' is set
      if (propertyId === undefined || propertyId === null) {
        throw new Error("Missing the required parameter 'propertyId' when calling deleteDocumentProperty");
      }

      let pathParams = {
        'document_id': documentId,
        'property_id': propertyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/documents/{document_id}/properties/{property_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a document property
     * Deletes the property of the document.
     * @param {String} documentId Id of the document
     * @param {String} propertyId Id of the document property
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDocumentProperty(documentId, propertyId) {
      return this.deleteDocumentPropertyWithHttpInfo(documentId, propertyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all listed documents.
     * Delete all documents listed in the request body. The endpoint is idempotent. I.e. if the list contains one or multiple non-existing documents, no error is produced.
     * @param {module:model/DeleteDocumentsRequest} deleteDocumentsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDocumentsWithHttpInfo(deleteDocumentsRequest) {
      let postBody = deleteDocumentsRequest;
      // verify the required parameter 'deleteDocumentsRequest' is set
      if (deleteDocumentsRequest === undefined || deleteDocumentsRequest === null) {
        throw new Error("Missing the required parameter 'deleteDocumentsRequest' when calling deleteDocuments");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/documents', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete all listed documents.
     * Delete all documents listed in the request body. The endpoint is idempotent. I.e. if the list contains one or multiple non-existing documents, no error is produced.
     * @param {module:model/DeleteDocumentsRequest} deleteDocumentsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDocuments(deleteDocumentsRequest) {
      return this.deleteDocumentsWithHttpInfo(deleteDocumentsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a document property
     * Gets the property of the document.
     * @param {String} documentId Id of the document
     * @param {String} propertyId Id of the document property
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentPropertyResponse} and HTTP response
     */
    getDocumentPropertyWithHttpInfo(documentId, propertyId) {
      let postBody = null;
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocumentProperty");
      }
      // verify the required parameter 'propertyId' is set
      if (propertyId === undefined || propertyId === null) {
        throw new Error("Missing the required parameter 'propertyId' when calling getDocumentProperty");
      }

      let pathParams = {
        'document_id': documentId,
        'property_id': propertyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DocumentPropertyResponse;
      return this.apiClient.callApi(
        '/documents/{document_id}/properties/{property_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a document property
     * Gets the property of the document.
     * @param {String} documentId Id of the document
     * @param {String} propertyId Id of the document property
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentPropertyResponse}
     */
    getDocumentProperty(documentId, propertyId) {
      return this.getDocumentPropertyWithHttpInfo(documentId, propertyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all document properties
     * Gets all the properties of the document.
     * @param {String} documentId Id of the document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentPropertiesResponse} and HTTP response
     */
    listDocumentPropertiesWithHttpInfo(documentId) {
      let postBody = null;
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling listDocumentProperties");
      }

      let pathParams = {
        'document_id': documentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DocumentPropertiesResponse;
      return this.apiClient.callApi(
        '/documents/{document_id}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all document properties
     * Gets all the properties of the document.
     * @param {String} documentId Id of the document
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentPropertiesResponse}
     */
    listDocumentProperties(documentId) {
      return this.listDocumentPropertiesWithHttpInfo(documentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set all document properties
     * Sets or replaces all the properties of the document.
     * @param {String} documentId Id of the document
     * @param {module:model/DocumentPropertiesRequest} documentPropertiesRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    replaceDocumentPropertiesWithHttpInfo(documentId, documentPropertiesRequest) {
      let postBody = documentPropertiesRequest;
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling replaceDocumentProperties");
      }
      // verify the required parameter 'documentPropertiesRequest' is set
      if (documentPropertiesRequest === undefined || documentPropertiesRequest === null) {
        throw new Error("Missing the required parameter 'documentPropertiesRequest' when calling replaceDocumentProperties");
      }

      let pathParams = {
        'document_id': documentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/documents/{document_id}/properties', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set all document properties
     * Sets or replaces all the properties of the document.
     * @param {String} documentId Id of the document
     * @param {module:model/DocumentPropertiesRequest} documentPropertiesRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    replaceDocumentProperties(documentId, documentPropertiesRequest) {
      return this.replaceDocumentPropertiesWithHttpInfo(documentId, documentPropertiesRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set a document property
     * Sets or replaces the property of the document.
     * @param {String} documentId Id of the document
     * @param {String} propertyId Id of the document property
     * @param {module:model/DocumentPropertyRequest} documentPropertyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    replaceDocumentPropertyWithHttpInfo(documentId, propertyId, documentPropertyRequest) {
      let postBody = documentPropertyRequest;
      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling replaceDocumentProperty");
      }
      // verify the required parameter 'propertyId' is set
      if (propertyId === undefined || propertyId === null) {
        throw new Error("Missing the required parameter 'propertyId' when calling replaceDocumentProperty");
      }
      // verify the required parameter 'documentPropertyRequest' is set
      if (documentPropertyRequest === undefined || documentPropertyRequest === null) {
        throw new Error("Missing the required parameter 'documentPropertyRequest' when calling replaceDocumentProperty");
      }

      let pathParams = {
        'document_id': documentId,
        'property_id': propertyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/documents/{document_id}/properties/{property_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set a document property
     * Sets or replaces the property of the document.
     * @param {String} documentId Id of the document
     * @param {String} propertyId Id of the document property
     * @param {module:model/DocumentPropertyRequest} documentPropertyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    replaceDocumentProperty(documentId, propertyId, documentPropertyRequest) {
      return this.replaceDocumentPropertyWithHttpInfo(documentId, propertyId, documentPropertyRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
