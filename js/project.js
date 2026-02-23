let allJobsList = [];
let interViewlist = [];
let rejectedList = [];
let currentStatus = 'btn-all-sec';



let total = document.getElementById('total');
let interView = document.getElementById('interview');
let rejected = document.getElementById('rejected');


const allFilterBtn = document.getElementById('btn-all-sec');
const interViewBtn = document.getElementById('btn-interview');
const rejectedViewBtn = document.getElementById('btn-rejected');
const jobCountBtn = document.getElementById('btn-job-count');



const allCardSection = document.getElementById('allcards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

// const allButton = document.getElementById('btn-all');
// allButton.addEventListener('click', function(){
//     alert("click from add even")
// })

function loadInitialData() {

    const cards = allCardSection.querySelectorAll('.jobcard');
    allJobsList = [];
    cards.forEach(card => {
        allJobsList.push({
            jobName: card.querySelector('.jobname').innerText,
            jobPost: card.querySelector('.jobpost').innerText,
            jobInfo: card.querySelector('.information').innerHTML,
            jobStatus: card.querySelector('.status').innerText,
            jobNotes: card.querySelector('.notes').innerText
        });
    });
}

function calculateCount() {
    const totalJobsCount = allCardSection.querySelectorAll('.jobcard').length;
    const interviewCount = interViewlist.length;
    const rejectedCount = rejectedList.length;

    
    total.innerText = totalJobsCount;
    interView.innerText = interviewCount;
    rejected.innerText = rejectedCount;

   // all button a count korbe   
    if (currentStatus == 'btn-all-sec') {
        jobCountBtn.innerText = `${totalJobsCount} jobs`;

        if (totalJobsCount == 0) {
            // allCardSection.innerHTML = '';
            renderEmptyjob(allCardSection);
        }
    } 
    // interview button a count korbe
    else if (currentStatus == 'btn-interview') {
        
        if (interviewCount == 0) {
            jobCountBtn.innerText = `0 jobs`;
            renderEmptyjob(filterSection);
        }
        else {
            jobCountBtn.innerText = `${interviewCount} of ${totalJobsCount} jobs`;
        }
    } 

    // reject button a count korbe 
    else if (currentStatus == 'btn-rejected') {
        
        if (rejectedCount == 0) {
            jobCountBtn.innerText = `0 jobs`;
            renderEmptyjob(filterSection);
        }
        else{
            jobCountBtn.innerText = `${rejectedCount} of ${totalJobsCount} jobs`;
        }
    }
}

function toggleStyle(id){
    // adding white bg for all
    allFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]')
    interViewBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]')
    rejectedViewBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]')

    // if any button has blue then remove
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]')
    interViewBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]')
    rejectedViewBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]')


   
    // console.log(id)

    const selected = document.getElementById(id);
    currentStatus = id;
    // console.log(selected)

    // adding blue bg for current button
    selected.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]', 'text-[#FFFFFF]');

    if(id == 'btn-interview'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }
    else if(id == 'btn-all-sec'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        renderAllJobs();

    }
    else if(id == 'btn-rejected'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejectedview();
    }
    calculateCount();
}



mainContainer.addEventListener('click', function (event){

    // console.log(event.target.classList.contains('interview-g'))
    
    // interview button
    if(event.target.classList.contains('interviewg')){
    
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.jobname').innerText;
        const jobPost = parentNode.querySelector('.jobpost').innerText;
        const jobInfo = parentNode.querySelector('.information').innerHTML;
        const jobStatus = 'INTERVIEW';
        const jobNotes = parentNode.querySelector('.notes').innerText;
        // const job = parentNode.querySelector('.notes').innerText;

        const targetInAll = allJobsList.find(item => item.jobName == jobName);
        if(targetInAll) {
            targetInAll.jobStatus = 'INTERVIEW';
        }

        parentNode.querySelector('.status').innerText = 'INTERVIEW'
        parentNode.querySelector('.status').classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]', 'bg-[#EF4444]', 'text-[#FFFFFF]');
        parentNode.querySelector('.status').classList.add('bg-[#10B981]', 'text-[#FFFFFF]');

        const cardInfo = {
            jobName,
            jobPost,
            jobInfo,
            jobStatus,
            jobNotes
        }
    
        const jobExist = interViewlist.find(item => item.jobName == cardInfo.jobName)
        
        
        if(!jobExist){
            interViewlist.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName)
        
        if(currentStatus === "btn-all-sec"){
            renderAllJobs();
        }

       else if(currentStatus == "btn-rejected"){
            renderRejectedview();

        }
        else if (currentStatus == "btn-interview") {
            renderInterview();
        }
        
        calculateCount()

    }

    // rejected button
    else if(event.target.classList.contains('rejectedr')){
    
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.jobname').innerText;
        const jobPost = parentNode.querySelector('.jobpost').innerText;
        const jobInfo = parentNode.querySelector('.information').innerHTML;
        const jobStatus = 'REJECTED';
        const jobNotes = parentNode.querySelector('.notes').innerText;
        // const job = parentNode.querySelector('.notes').innerText;

        const targetInAll = allJobsList.find(item => item.jobName == jobName);
        if (targetInAll) {
            targetInAll.jobStatus = 'REJECTED';
        }


        parentNode.querySelector('.status').innerText = 'REJECTED'
        parentNode.querySelector('.status').classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]', 'bg-[#10B981]', 'text-[#FFFFFF]');
        parentNode.querySelector('.status').classList.add('bg-[#EF4444]', 'text-[#FFFFFF]');


        const cardInfo = {
            jobName,
            jobPost,
            jobInfo,
            jobStatus,
            jobNotes
        }
    
        const jobExist = rejectedList.find(item => item.jobName == cardInfo.jobName)
        
        
        if(!jobExist ){
            rejectedList.push(cardInfo)
        }

        interViewlist = interViewlist.filter(item => item.jobName != cardInfo.jobName);

        if (currentStatus == "btn-all-sec") {
            renderAllJobs();
        }

        else if(currentStatus == "btn-interview"){
            renderInterview();
        }
        
        else if (currentStatus == "btn-rejected") {
            renderRejectedview();
        }
        calculateCount()

    }

    // delete button 
    else if (event.target.closest('.btn-delete')) {
        const card = event.target.closest('.jobcard');
        const jobName = card.querySelector('.jobname').innerText;

        allJobsList = allJobsList.filter(item => item.jobName !== jobName);
        interViewlist = interViewlist.filter(item => item.jobName !== jobName);
        rejectedList = rejectedList.filter(item => item.jobName !== jobName);
        
        card.remove();

        if (currentStatus == 'btn-all-sec') {
            const remainingCards = allCardSection.querySelectorAll('.jobcard').length;
            if (remainingCards == 0) {
                // allCardSection.innerHTML = ''; 
                renderEmptyjob(allCardSection);
            }
        }

        else if (currentStatus == 'btn-interview') {
            if(interViewlist.length == 0){
                renderEmptyjob(filterSection);
            } 
            else{
                renderInterview();
            }
        }
        else if (currentStatus == 'btn-rejected') {
            if(rejectedList.length == 0){
                renderEmptyjob(filterSection);
            } 
            else {
                renderRejectedview();
            }
        }
        

        calculateCount();
    
    }

})


// all jobs er jonno
function renderAllJobs() {
    allCardSection.innerHTML = '';
    
    for (let job of allJobsList) {
        let div = document.createElement('div');
        div.className = 'jobcard bg-[#FFFFFF] border-[#F1F2F4] rounded-lg p-6';
        
        let statusColor = "bg-[#EEF4FF] text-[#002C5C]"; 
        if(job.jobStatus == "INTERVIEW"){
            statusColor = "bg-[#10B981] text-[#FFFFFF]";
        }
        if(job.jobStatus == "REJECTED") {
            statusColor = "bg-[#EF4444] text-[#FFFFFF]";
        }

        div.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                    <h2 class="jobname text-lg font-semibold text-[#002C5C] mb-1">${job.jobName}</h2>
                    <p class="jobpost text-[#64748B] mb-5">${job.jobPost}</p>
                    <div class="information flex items-center gap-2 text-sm text-[#64748B] mb-5">${job.jobInfo}</div>
                    <p class="status font-medium rounded-sm ${statusColor} text-sm px-3 py-2 w-[9rem] text-center mb-2">${job.jobStatus}</p>
                    <p class="notes text-sm text-[#323B49] mb-5">${job.jobNotes}</p>
                    <div class="flex gap-2">
                        <button class="interviewg border border-[#10B981] text-[#10B981] px-3 py-2 rounded-sm text-sm font-semibold hover:bg-emerald-50 cursor-pointer">Interview</button>
                        <button class="rejectedr border border-[#EF4444] text-[#EF4444] px-3 py-2 rounded-sm text-sm font-semibold hover:bg-red-50 cursor-pointer">Rejected</button>
                    </div>
                </div>
                <button class="btn-delete text-[#64748B] hover:text-[#EF4444]"><i class="fa-regular fa-trash-can"></i></button>
            </div>`;
        allCardSection.appendChild(div);
    }
}

function renderInterview(){
    filterSection.innerHTML = '';
    filterSection.className = 'grid grid-cols-1 gap-4';
    
    for(let interViews of interViewlist){
        console.log(interViews)

        let div = document.createElement('div');
        div.className = 'jobcard bg-[#FFFFFF] border-[#F1F2F4] rounded-lg p-6';
        div.innerHTML = `
                        <div class="flex justify-between items-start">
                    <div>
                        <h2 class="jobname text-lg font-semibold text-[#002C5C] mb-1">${interViews.jobName}</h2>
                        <p class="jobpost text-[#64748B] mb-5">${interViews.jobPost}</p>
                        
                        <div class="information flex items-center gap-2 text-sm text-[#64748B] mb-5">
                            ${interViews.jobInfo}
                        </div>

                        <p class="status font-medium rounded-sm bg-[#10B981] text-[#FFFFFF] text-sm px-3 py-2 w-[9rem] text-center mb-2">${interViews.jobStatus}</p>
                        
                        <p class="notes text-sm text-[#323B49] mb-5">
                            ${interViews.jobNotes}
                        </p>

                        <div class="flex gap-2">
                            <button class="interviewg border  border-[#10B981] text-[#10B981] px-3 py-2 rounded-sm text-sm font-semibold hover:bg-emerald-50 active:scale-80 transition-all duration-300 cursor-pointer">Interview</button>
                            <button class="rejectedr border border-[#EF4444] text-[#EF4444] px-3 py-2 rounded-sm text-sm font-semibold hover:bg-red-50 active:scale-80 transition-all duration-300 cursor-pointer">Rejected</button>
                        </div>
                    </div>

                    <button class="btn-delete text-[#64748B] hover:text-[#EF4444] transition-colors">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
        `
        filterSection.appendChild(div)

    }

}


function renderRejectedview(){
    filterSection.innerHTML = '';
    filterSection.className = 'grid grid-cols-1 gap-4';
    
    for(let rejectedview of rejectedList){
        console.log(rejectedview)

        let div = document.createElement('div');
        div.className = 'jobcard bg-[#FFFFFF] border-[#F1F2F4] rounded-lg p-6';
        div.innerHTML = `
                        <div class="flex justify-between items-start">
                    <div>
                        <h2 class="jobname text-lg font-semibold text-[#002C5C] mb-1">${rejectedview.jobName}</h2>
                        <p class="jobpost text-[#64748B] mb-5">${rejectedview.jobPost}</p>
                        
                        <div class="information flex items-center gap-2 text-sm text-[#64748B] mb-5">
                            ${rejectedview.jobInfo}
                        </div>

                        <p class="status font-medium rounded-sm bg-[#EF4444] text-[#FFFFFF] text-sm px-3 py-2 w-[9rem] text-center mb-2">${rejectedview.jobStatus}</p>
                        
                        <p class="notes text-sm text-[#323B49] mb-5">
                            ${rejectedview.jobNotes}
                        </p>

                        <div class="flex gap-2">
                            <button class="interviewg border  border-[#10B981] text-[#10B981] px-3 py-2 rounded-sm text-sm font-semibold hover:bg-emerald-50 active:scale-80 transition-all duration-300 cursor-pointer">Interview</button>
                            <button class="rejectedr border border-[#EF4444] text-[#EF4444] px-3 py-2 rounded-sm text-sm font-semibold hover:bg-red-50 active:scale-80 transition-all duration-300 cursor-pointer">Rejected</button>
                        </div>
                    </div>

                    <button class="btn-delete text-[#64748B] hover:text-[#EF4444] transition-colors">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
        `
        filterSection.appendChild(div)

    }

}


// No jobs available
function renderEmptyjob(container) {
    
    if(!container) return;
    container.innerHTML = `
        <div class="bg-[#FFFFFF] rounded-lg border-[#F1F2F4] flex flex-col justify-center items-center py-27.75">
            <img class="pb-5 md:h-auto h-14" src="./B13-A4-PH-Job-Tracker/jobs.png" alt="">
            <h2 class="md:text-2xl text-lg text[#002C5C] font-semibold pb-1">No jobs available</h2>
            <p class="md:text-base text-xs text-[#64748B]">
                Check back soon for new job opportunities
            </p>
        </div>
    `;
}


loadInitialData();
calculateCount(); 