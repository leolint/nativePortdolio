function allAsideMenuLogic() {
    let observsStack = [];
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const alreadyInStack = observsStack.some(item => item === entry.target.id);
            const isLast = observsStack.length - 1 === observsStack.findIndex(item => item === entry.target.id);
            if (entry.isIntersecting && !alreadyInStack) {
                let technologies;
                observsStack.push(entry.target.id);
                technologies = document.getElementById(`${entry.target.id}_step`);
                technologies.classList.add("openText");
            }
            if (!entry.isIntersecting && alreadyInStack && isLast) {
                observsStack.pop();
                technologies = document.getElementById(`${entry.target.id}_step`);
                technologies.classList.remove("openText");
            }
            if (!entry.isIntersecting && alreadyInStack) {
                observsStack.shift();
                technologies = document.getElementById(`${entry.target.id}_step`);
                technologies.classList.remove("openText");
            }
        }
        );
    });

    const main_wrapper = document.getElementById('main_wrapper');
    const projects_wrapper = document.getElementById('projects_wrapper');
    const slider_wrapper = document.getElementById('slider_wrapper');
    const feedback_wrapper = document.getElementById('feedback_wrapper');
    observer.observe(main_wrapper);
    observer.observe(projects_wrapper);
    observer.observe(slider_wrapper); 
    observer.observe(feedback_wrapper);
}

allAsideMenuLogic();


