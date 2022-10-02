# Website #
Website is basically a collection of multiple type of files that range from HTML, CSS to Javascript, images, etc. These all files explains and guides the browser on how the site should be displayed. They should be accessible to all the user all over the globe otherwise anyone could create a website on their local host by using the above technologies. So make sure that our site is accessible to all we host it on external powerful system closely connected to internet which is know as server which stores these files.<br/>
And Browser makes sure to display the website which the user is requesting from the server and displaying it in the browser window. Currently the major browsers available are: Chrome, Firefox, Safari. The specification on how the browser takes in all the website files and displays it on the browser are maintained by W3C organisation.<br/><br/>
The different browsers available have some similarities which are as follows<br/>
    1. **Address Bar for URLs** - address of the website<br/>
    2. **Back and forward buttons** - to switch between pages visited<br/>
    3. **Bookmark option** - to save the page<br/>
    4. **Refresh and Stop loading button** - this button could be used to refresh the pages or even stop the loading or refresh process<br/>
    5. **Home Button** - This button takes you to home page of the browser<br/><br/>
## Browsers Main Components ##
The browsers main components are as follows<br/>
    1. **The user interface** - the includes every part of the browser window excluding the window where you have requested the page<br/>
    2. **The browser interface** - It performs the process between the User Interface (UI) and the rendering engine<br/>
    3. **The rendering engine** - It is responsible for displaying requested content<br/>
    4. **Networking** - It is responsible for displaying requested content<br/>
    5. **UI Backend** - This is a backend which is responsible for displaying widgets, and other third party interfaces<br/>
    6. **Javascript Interpreter** - Used to execute and display javascript code which could be found as *.js* files.<br/>
    7. **Data Storage** - All the browsers have the functionality for storing data in multiple manner like localStorage, cookies, etc.<br/>
<br/><br/>

Different browsers use different rendering engines to display the content on the window.<br/>
First the rendering engine does is getting all the contents of the requested website from the networking layer to your local.<br/>
The rendering engine will start parsing HTML document and convert elements to DOM nodes in a tree called "content tree".̥After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.<br/><br/>
![rendering_diagram](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/bPlYx9xODQH4X1KuUNpc.png?auto=format&w=741)<br/><br/>
## Parsing ##
Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.<br/>
### HTML Parser ###
The job of the HTML parser is to parse the HTML markup into a parse tree.
The vocabulary and syntax of HTML are defined in specifications created by the W3C organization.
### CSS parsing ###
Well, unlike HTML, CSS is a context free grammar and can be parsed using the types of parsers.
## The order of processing scripts and style sheets ##
### Scripts ###
The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a `<script>` tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. 
### Speculative parsing ###
While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved.
### Style sheets ###
Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing. There is an issue, though, of scripts asking for style information during the document parsing stage. If the style is not loaded and parsed yet, the script will get wrong answers and apparently this caused lots of problems. It seems to be an edge case but is quite common. 
## Render tree construction ##
While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.<br/>
Firefox calls the elements in the render tree "frames". WebKit uses the term renderer or render object.<br/>
A renderer knows how to lay out and paint itself and its children.