class Tooltip{

}

class ProjectItem {


}

class ProjectList{
    constructor(type){
        const projItems = document.querySelectorAll(`#${type}-projects li`);
        console.log(projItems);


    }

}

class App{
    static init(){
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    }

}
App.init();