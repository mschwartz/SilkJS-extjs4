Ext.data.JsonP.Ext_draw_Draw({"mixedInto":[],"tagname":"class","meta":{},"allMixins":[],"files":[{"href":"Draw.html#Ext-draw-Draw","filename":"Draw.js"}],"aliases":{},"uses":[],"members":{"event":[],"property":[{"meta":{"protected":true},"tagname":"property","owner":"Ext.Base","name":"self","id":"property-self"}],"method":[{"meta":{"protected":true,"deprecated":{"text":"as of 4.1. Use {@link #callParent} instead."}},"tagname":"method","owner":"Ext.Base","name":"callOverridden","id":"method-callOverridden"},{"meta":{"protected":true},"tagname":"method","owner":"Ext.Base","name":"callParent","id":"method-callParent"},{"meta":{},"tagname":"method","owner":"Ext.Base","name":"getInitialConfig","id":"method-getInitialConfig"},{"meta":{"protected":true},"tagname":"method","owner":"Ext.Base","name":"initConfig","id":"method-initConfig"},{"meta":{},"tagname":"method","owner":"Ext.draw.Draw","name":"snapEndsByDate","id":"method-snapEndsByDate"},{"meta":{},"tagname":"method","owner":"Ext.draw.Draw","name":"snapEndsByDateAndStep","id":"method-snapEndsByDateAndStep"},{"meta":{"protected":true},"tagname":"method","owner":"Ext.Base","name":"statics","id":"method-statics"}],"css_var":[],"css_mixin":[],"cfg":[]},"inheritable":false,"extends":"Ext.Base","statics":{"property":[],"event":[],"method":[],"css_var":[],"css_mixin":[],"cfg":[]},"alternateClassNames":[],"private":true,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.draw.Draw</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.draw.Color' rel='Ext.draw.Color' class='docClass'>Ext.draw.Color</a></div><h4>Files</h4><div class='dependency'><a href='source/Draw.html#Ext-draw-Draw' target='_blank'>Draw.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>Base Drawing class.  Provides base drawing functions.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-self' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-property-self' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependentOL on 'this'\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-callOverridden' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callOverridden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='deprecated signature'>deprecated</strong><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n        <div class='signature-box deprecated'>\n        <p>This member has been <strong>deprecated</strong> </p>\n        <p>as of 4.1. Use <a href=\"#!/api/Ext.draw.Draw-method-callParent\" rel=\"Ext.draw.Draw-method-callParent\" class=\"docClass\">callParent</a> instead.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callOverridden(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the overridden method</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the parent method</p>\n</div></li></ul></div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getInitialConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-snapEndsByDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.Draw'>Ext.draw.Draw</span><br/><a href='source/Draw.html#Ext-draw-Draw-method-snapEndsByDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.Draw-method-snapEndsByDate' class='name expandable'>snapEndsByDate</a>( <span class='pre'><a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a> from, <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a> to, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> stepsMax, <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> lockEnds</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>snapEndsByDate is a utility method to deduce an appropriate tick configuration for the data set of given\nfeature. ...</div><div class='long'><p>snapEndsByDate is a utility method to deduce an appropriate tick configuration for the data set of given\nfeature. Refer to snapEnds.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>from</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>The minimum value in the data</p>\n</div></li><li><span class='pre'>to</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>The maximum value in the data</p>\n</div></li><li><span class='pre'>stepsMax</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The maximum number of ticks</p>\n</div></li><li><span class='pre'>lockEnds</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>If true, the 'from' and 'to' parameters will be used as fixed end values</p>\n\n<pre><code>   and will not be adjusted\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>The calculated step and ends info; properties are:</p>\n\n<pre><code>- from: The result start value, which may be lower than the original start value\n- to: The result end value, which may be higher than the original end value\n- step: The value size of each step\n- steps: The number of steps. NOTE: the steps may not divide the from/to range perfectly evenly;\n         there may be a smaller distance between the last step and the end value than between prior\n         steps, particularly when the `endsLocked` param is true. Therefore it is best to not use\n         the `steps` result when finding the axis tick points, instead use the `step`, `to`, and\n         `from` to find the correct point for each tick.\n</code></pre>\n</div></li></ul></div></div></div><div id='method-snapEndsByDateAndStep' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.Draw'>Ext.draw.Draw</span><br/><a href='source/Draw.html#Ext-draw-Draw-method-snapEndsByDateAndStep' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.Draw-method-snapEndsByDateAndStep' class='name expandable'>snapEndsByDateAndStep</a>( <span class='pre'><a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a> from, <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a> to, <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> step, <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> lockEnds</span> )</div><div class='description'><div class='short'>snapEndsByDateAndStep is a utility method to deduce an appropriate tick configuration for the data set of given\nfeatu...</div><div class='long'><p>snapEndsByDateAndStep is a utility method to deduce an appropriate tick configuration for the data set of given\nfeature and specific step size.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>from</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>The minimum value in the data</p>\n</div></li><li><span class='pre'>to</span> : <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>The maximum value in the data</p>\n</div></li><li><span class='pre'>step</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>An array with two components: The first is the unit of the step (day, month, year, etc). The second one is the number of units for the step (1, 2, etc.).</p>\n</div></li><li><span class='pre'>lockEnds</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>If true, the 'from' and 'to' parameters will be used as fixed end values</p>\n\n<pre><code>   and will not be adjusted\n</code></pre>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","name":"Ext.draw.Draw","singleton":true,"code_type":"ext_define","subclasses":[],"superclasses":["Ext.Base","Ext.draw.Draw"],"component":false,"id":"class-Ext.draw.Draw","mixins":[],"requires":["Ext.draw.Color"],"inheritdoc":null});