var Formulaire = {
    
    form: function (method, action, element) {
        
        "use strict";
        this.method = method;
        this.action = action;
        this.element = element;
    
        var f = document.createElement("form");
        f.setAttribute('method', method);
        f.setAttribute('action', action);
        
        document.getElementsByTagName(element)[0].appendChild(f);
    },
    
    input: function (type, name, value) {
        
        "use strict";
        this.type = type;
        this.name = name;
        this.value = value;
        
        var i = document.createElement("input");
        i.setAttribute('type', type);
        i.setAttribute('name', name);
        i.setAttribute('value', value);
        
        document.getElementsByTagName('form')[0].appendChild(i);
        
        
    },
    
    select: function (name, value1, value2, value3) {
        
        "use strict";
        this.name = name;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        
        var s = document.createElement("select");
        var v1 = document.createElement("option");
        var v2 = document.createElement("option");
        var v3 = document.createElement("option");
        
        s.setAttribute('name', name);
        v1.setAttribute('value', value1);
        v2.setAttribute('value', value2);
        v3.setAttribute('value', value3);
        
        s.appendChild(v1);
        s.appendChild(v2);
        s.appendChild(v3);
        
        v1.innerHTML = value1;
        v2.innerHTML = value2;
        v3.innerHTML = value3;
        
        document.getElementsByTagName('form')[0].appendChild(s);
        
    },
    
    textarea: function (name, rows, cols) {
        
        "use strict";
        this.name = name;
        this.rows = rows;
        this.cols = cols;
        
        var t = document.createElement("textarea");
        
        t.setAttribute('name', name);
        t.setAttribute('rows', rows);
        t.setAttribute('cols', cols);
        
        document.getElementsByTagName('form')[0].appendChild(t);
        
        
    }
    
};


var Html = {
    
    link: function (href, rel, type, title) {
        
        "use strict";
        this.href = href;
        this.rel = rel;
        this.type = type;
        this.title = title;
        
        var l = document.createElement('link');
        
        l.setAttribute('href', href);
        l.setAttribute('rel', rel);
        l.setAttribute('type', type);
        l.setAttribute('title', title);
        
        document.getElementsByTagName('head')[0].appendChild(l);
            
    },
   
    meta: function (name, content) {
        
        "use strict";
        this.name = name;
        this.content = content;
        
        var m = document.createElement('meta');
        
        m.setAttribute('name', name);
        m.setAttribute('content', content);
        
        document.getElementsByTagName('head')[0].appendChild(m);

    },
    
   img: function (src, alt) {
       
       "use strict";
       this.src = src;
       this.alt = alt;
       
       var im = document.createElement('img');
       
       im.setAttribute('src', src);
       im.setAttribute('alt', alt);
       
       document.getElementsByTagName('body')[0].appendChild(im);
   },
    
   a: function (href, linkName) {
       
       "use strict";
       this.href = href;
       this.linkName = linkName;
       
        var a = document.createElement("a");
       
       a.setAttribute("href", href);
       
       document.getElementsByTagName('body')[0].appendChild(a);
       
        a.innerHTML = linkName;
       
   },
    
    script: function (type, src) {
        
        "use strict";
        this.type = type;
        this.src = src;
        
        var sc = document.createElement('script');
        
        sc.setAttribute("type", type);
        sc.setAttribute("src", src);
        
        document.getElementsByTagName('head')[0].appendChild(sc);
    }
    
};

var trueFormulaire = Object.create(Formulaire);
trueFormulaire.form("post", "#", "body");
trueFormulaire.input("text", "name", "name");
trueFormulaire.select("sexe", "Masculin", "Feminin", "autre");
trueFormulaire.input("submit", "submit", "submit");
trueFormulaire.textarea("textarea", 10, 10);
trueFormulaire.input("radio", "test", "test");
trueFormulaire.input("checkbox", "checkthat", "checkthat");


var trueHTML = Object.create(Html);
trueHTML.link("style.css", "stylesheet", "text/css", "test");
trueHTML.meta("author", "Horscontexte");
trueHTML.img("http://www.toutpourmonchat.fr/wp-content/uploads/2013/07/chat-bien-etre.jpg","Chat trop mignon");
trueHTML.a("http://www.perdu.com","Perdu?");
trueHTML.script("text/javascript", "test.js");


