function loadSkills(){
    var skill = document.getElementById("skill").innerHTML;
    if (skill == "👉 Skills"){
        document.getElementById("skill").innerHTML = "👇 Skills";
        document.getElementById('skills').className = 'downWardAnimation';
    }else{
        document.getElementById("skill").innerHTML = "👉 Skills";
        document.getElementById('skills').className = 'upWardAnimation';
    }
};

function loadLinks(){
    var link = document.getElementById("link").innerHTML;
    if (link == "👉 Links"){
        document.getElementById("link").innerHTML = "👇 Links";
        document.getElementById('links').className = 'downWardAnimation';
    }else{
        document.getElementById("link").innerHTML = "👉 Links";
        document.getElementById('links').className = 'upWardAnimation';
    }
};

function loadProjects(){
    var project = document.getElementById("project").innerHTML;
    if (project == "👉 Projects"){
        document.getElementById("project").innerHTML = "👇 Projects";
        document.getElementById('projects').className = 'downWardAnimation';
    }else{
        document.getElementById("project").innerHTML = "👉 Projects";
        document.getElementById('projects').className = 'upWardAnimation';
    }
};