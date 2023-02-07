# xayn_back_office_sdk

XaynBackOfficeSdk - JavaScript client for xayn_back_office_sdk
# Back Office
The back office is typically used within server-side apps.
This SDK acts as a create/read/update/delete interface for anything related to documents.

## Document
By document, we refer to a cohesive text, for example a complete news article.
However, we only require a simple representation for our system to work. Consisting just of a unique ID, a text snippet and optional properties.
The text snippet is ideally a short, meaningful representation of the larger document, reduced to just one paragraph.

### Id
The document_id is a unique identifier for a single document.
We don't require a specific format, it just needs to comply to the following regexp: `^[a-zA-Z0-9_:@.-]+$`.

## Snippet
A snippet is a reduced representation of a larger text, for example if the document would be a news article, then its text would be the news article in a pure textual format.
In order for our system to work correctly, it is important that the snippet is just the size of one or two paragraphs, and that the snippet's text clearly summarises the larger text.
For example, let's take a news article which talks about the effects of inflation.
Our snippet could then be: \"Inflation worries as prices keep rising. People having budgetary difficulties as a result. Government pressured to take action.\".
A bad snippet would for example be just taking the very first paragraph of a document, which could sometimes work, but could also lead to:
\"December 20th 2020. Article written by Jane Doe. On this bright and sunny day, people might forget about their worries sometimes.\"

## Properties
Properties are optional entries for documents, which are usually needed to properly show the document back to the user, when it returns as a personalized document.
If for example, you'd wish to integrate a type of carousel view, listing a total of 10 personalized documents in a \"for you\"-section, then you might choose to display each document as an image and title, with a url to link the user to when pressed.
For this, you would need three document properties: `image`, `link` and `title`.
You are free to add as many properties as needed.

## Auth
The API requires an authentication token when used.
Please see further down in this README.md file, or refer to the test included in this SDK's codebase, on how to set this token correctly.
\\
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0-rc8
- Package version: 1.0.22
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install xayn_back_office_sdk --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your xayn_back_office_sdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

# Getting started

## Setting up the SDK

Our SDK includes a test code page, which simply invokes each existing method. Method invocation examples can always be copied from there.

This SDK has been generated via OpenAPI. The original spec files can be found in our [open source git repository](https://github.com/xaynetwork/xayn_discovery_engine/tree/main/web-api/openapi).
If preferred, you can also generate the SDK yourself using the tooling provided by [OpenAPI](https://www.openapis.org/).

The following code snippet initializes the API using 2 parameters:
- A `base_url`, which acts as the endpoint for API calls
- An authorization token

```javascript
let base_url = $URL
let authorizationToken = $TOKEN

// create a client with the base_url
let client = new XaynBackOfficeSdk.ApiClient(base_url);

// pass the token to the client
let api_key = client.authentications["ApiKeyAuth"];
api_key.apiKey = authorizationToken;

// finally, initialize the api with the client
let api = new XaynBackOfficeSdk.BackOfficeApi(client);
```

## Creating documents

You can, submit multiple documents at once, with an upper limit of 100 documents per call.
If you need to create more documents, then split up your document list into batches of 100 each and then call this method sequentially.

Should one or more documents from a batch fail to be created, then the response will list these documents.

If you pass a document which _was already created in the past_, then you simply overwrite the old document with the newly provided one. This can only happen if we find the exact same document ID already in our system.

```javascript
api.createDocuments({
    // maximum 100 documents at a time!
    documents: [
        {
            id: "document_A",
            snippet: "one paragraph about document A",
            properties: {
                image_url: "https://...",
                link_url: "https://...",
                date_published: "...",
                author: "...",
            },
        },
        {
            id: "document_B",
            snippet: "one paragraph about document B",
            properties: {
                image_url: "https://...",
                link_url: "https://...",
                date_published: "...",
                author: "...",
            },
        },
    ],
}).then((result) => {
    console.log("done!)
}).catch((error) => {
    console.log(error)
})
```

## Other operations

After documents have been created, you can continue to manage them in different ways.

Please refer to the test file to see some examples, below is a list of available methods:
- `deleteDocuments`
- `deleteDocument`
- `deleteDocumentProperties`
- `deleteDocumentProperty`
- `listDocumentProperties`
- `getDocumentProperty`
- `replaceDocumentProperties`
- `replaceDocumentProperty`