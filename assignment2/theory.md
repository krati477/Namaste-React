**Que. What is `NPM`?**

Ans. npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:

the website
the Command Line Interface (CLI)
the registry

Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.

The CLI runs from a terminal, and is how most developers interact with npm.

The registry is a large public database of JavaScript software and the meta-information surrounding it.


**Que. What is `Parcel/Webpack`? Why do we need it?**

Ans. Parcel and webpack are the bundlers used mostly for JavaScript or Typescript code that helps you to minify, clean, and make your code compact so that it becomes easier to send a request or receive the response from the server.
Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

Module bundlers(Parcel/webpack) are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.



**Que. What is `.parcel-cache`?**

Ans. cache folder (or . parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.
Everything Parcel does is cached – transformation, dependency resolution, bundling, optimizing, and everything in between.

**Que. What is `npx` ?**

Ans. The `x` in npx stands for `Execute` and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.



**Que. What is difference between `dependencies` vs `devDependencies`?**

Ans. A dependency is a library that a project needs to function effectively. DevDependencies are the packages a developer needs during development.
The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime. To save a dependency as a devDependency on installation we need to do an npm install --save-dev or npm install -D , instead of just an npm install --save or npm install.

**Que. What is Tree Shaking?**

Ans. Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.


**Que. What is Hot Module Replacement?**

Ans. Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: 

1. Retain application state which is lost during a full reload.
2. Save valuable development time by only updating what's changed.
3. Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

You can set up HMR so that this process happens automatically, or you can choose to require user interaction for updates to occur.

**Que. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.?**


Ans. Parcel starts with a great development experience, from starting a new project, to iterating and debugging, and shipping to production.

1. `Zero config` - Parcel supports many languages and file types out of the box, from web technologies like HTML, CSS, and JavaScript, to assets like images, fonts, videos, and more. And when you use a file type that isn't included by default, Parcel will automatically install all of the necessary plugins and dev dependencies for you!

2. `Hot reloading` - _When you make a change, Parcel automatically updates your code in the browser – no page reload necessary!_
Parcel also integrates with React Fast Refresh and the Vue Hot Reloading API to automatically preserve your application state between updates. This gives you instant feedback as you make changes, without taking you out of context.

3. `Minification` - Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box! Just run parcel build index.html, and your whole application will be built and optimized automatically.

4. `Image optimization` - Parcel supports resizing, converting, and optimizing images! Just pass query parameters for the format and size you need when referencing the image file in your HTML, CSS, JavaScript, etc. and Parcel will take care of the conversion and optimization process.

You can even request multiple sizes or formats of the same source image for different devices or browsers!

5. `Transpilation` - Parcel transpiles your JavaScript and CSS for your target browsers automatically! Just declare a browserslist in your package.json, and Parcel takes care of transpiling only what's needed.

**Que. What is `.gitignore`? What should we add and not add into it?**

Ans. The `.gitignore` file is a text file that tells Git which files or folders to ignore in a project.
Any files that do not need to get committed like cashed files or folders (.parcel-cache, dist) and heavy packages (node_modules)(bigger in size), should be added to the `gitignore` file.

**Que. What is the difference between `package.json` and `package-lock.json`?**
Ans. _When working on a project that utilizes NPM, you will find two files in your project root folder – the package.json file and the package-lock.json file._

**The Package.Json File** - The “package.json” file defines the rules required to run your application and install dependencies. it contains all the meta information about your application and version information of the installed packages.

**The Package-Lock.Json File** - The “package-lock.json” file holds detailed information on all the dependencies installed based on the package.json rules. This file is longer and contains much more information than the “package.json” file. 
_This file serves one primary purpose in your application. It locks the exact version of any dependency required by your application._


**Que. Why should I not modify `package-lock.json`?**

Ans. The reason  is, package-lock. json may change automatically when you run npm install is because NPM is updating the package-lock. json file to accurately reflect all the dependencies it has downloaded since it may have gotten more up-to-date versions of some of them, Once NPM updates the package-lock.


**Que. What is `node_modules` ? Is it a good idea to push that on git?**

Ans. `node_modules` is a directory created by npm and a way of tracking each packages you install locally via package.
_Folder node_modules should not be committed to Git. Apart from their big size, commits including them can become distracting and dependencies are system specific and might include native modules, you should never assume that your node_modules folder will work in production._


**Que. What is the `dist` folder?**

Ans. The dist folder, short for distribution folder, contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.


**Que. What is `browserlists`?**
Ans. Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

**Que. Difference between ^ - caret and ~ - tilda?**
Ans. The tilde matches the most recent minor version (the middle number) but caret will update you to the most recent major version (the first number).

~1.2.3 will match all 1.2.x versions, but it will miss 1.3.0.

^1.2.3 will match any 1.x.x release including 1.3.0, but it will hold off on 2.0.0.

**Que. What is different types in script?**
Ans. type="module" -> This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The charset and defer attributes have no effect.

type="importmap" -> This value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.

type="blocking" -> This attribute explicitly indicates that certain operations should be blocked on the fetching of the script. The operations that are to be blocked must be a space-separated list of blocking attributes.

