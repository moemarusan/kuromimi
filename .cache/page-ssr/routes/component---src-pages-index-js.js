"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5030);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
const Layout=({location,title,children})=>{const rootPath=`${""}/`;const isRootPath=location.pathname===rootPath;let header;if(isRootPath){header=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"main-heading"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"blog-title",to:"/"},title));}else{header=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"blog-title",to:"/"},title);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"global-wrapper","data-is-root-path":isRootPath},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"wrap"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"global-header"},header),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,children),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer",null,"\xA9\uFE0Emoemarusan")));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5030);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */const Seo=({description,title,children})=>{var _site$siteMetadata,_site$siteMetadata2,_site$siteMetadata2$s;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("2841359383");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;let is_root;if(title===site.siteMetadata.title){is_root=true;}else{is_root=false;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,is_root?defaultTitle:`${title} | ${defaultTitle}`),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:site_name",content:defaultTitle}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{property:"og:image",content:"https://kuromimi.moemarusan.com/ogp-image.png"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:(_site$siteMetadata2$s=_site$siteMetadata2.social)===null||_site$siteMetadata2$s===void 0?void 0:_site$siteMetadata2$s.twitter)||``}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:image",content:"https://kuromimi.moemarusan.com/ogp-image.png"}),children);};Seo.defaultProps={meta:[],description:``};Seo.propTypes={description:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),meta:prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5030);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8678);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9357);
const BlogIndex=({data,location})=>{var _data$site$siteMetada;const siteTitle=((_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.title)||`Title`;const posts=data.allMarkdownRemark.nodes;if(posts.length===0){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{location:location,title:siteTitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"No blog posts found. Add markdown posts to \"content/blog\" (or the directory you specified for the \"gatsby-source-filesystem\" plugin in gatsby-config.js)."));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{location:location,title:siteTitle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol",{className:"articles"},posts.map(post=>{const title=post.frontmatter.title||post.fields.slug;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:post.fields.slug},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{className:"post-list-item",itemScope:true,itemType:"http://schema.org/Article"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"post-list"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:"post-title"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"post-title",to:post.fields.slug,itemProp:"url"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{itemProp:"headline"},title))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small",{className:"post-meta"},post.frontmatter.date))));})));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogIndex);const Head=({data})=>{var _data$site$siteMetada2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:((_data$site$siteMetada2=data.site.siteMetadata)===null||_data$site$siteMetada2===void 0?void 0:_data$site$siteMetada2.title)||`Title`});};const pageQuery="1596223148";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map