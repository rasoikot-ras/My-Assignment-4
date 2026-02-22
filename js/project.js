let interViewlist = [];
let rejectedList = [];




let total = document.getElementById('total');
let interView = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allFilterBtn = document.getElementById('btn-all');
const interViewBtn = document.getElementById('btn-interview');
const rejectedViewBtn = document.getElementById('btn-rejected');



const allCardSection = document.getElementById('allcards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

// const allButton = document.getElementById('btn-all');
// allButton.addEventListener('click', function(){
//     alert("click from add even")
// })

function calculateCount(){
    total.innerText = allCardSection.children.length;
    interView.innerText = interViewlist.length;
    rejected.innerText = rejectedList.length;
}

calculateCount()

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
    // console.log(selected)

    // adding blue bg for current button
    selected.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]', 'text-[#FFFFFF]');

    if(id == 'btn-interview'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
    else if(id == 'btn-all'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }

}



mainContainer.addEventListener('click', function (event){

    // console.log(event.target.classList.contains('interview-g'))
    
    if(event.target.classList.contains('interviewg')){
    
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.jobname').innerText;
        const jobPost = parentNode.querySelector('.jobpost').innerText;
        const jobInfo = parentNode.querySelector('.information').innerText;
        const jobStatus = parentNode.querySelector('.status').innerText;
        const jobNotes = parentNode.querySelector('.notes').innerText;
    // const job = parentNode.querySelector('.notes').innerText;
        parentNode.querySelector('.status').innerText = 'INTERVIEW'

        const cardInfo = {
            jobName,
            jobPost,
            jobInfo,
            jobStatus: 'INTERVIEW',
            jobNotes
        }
    
        const jobExist = interViewlist.find(item=> item.jobName == cardInfo.jobName)
        
        
        if(!jobExist ){
            interViewlist.push(cardInfo)
        }
    
        renderInterview()


    }
})

function renderInterview(){
    filterSection.innerHTML = '';
    
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

                        <p class="status font-medium rounded-sm bg-[#EEF4FF] text-[#002C5C] text-sm px-3 py-2 w-[9rem] text-center mb-2"></p>
                        
                        <p class="notes text-sm text-[#323B49] mb-5">
                            ${interViews.jobNotes}
                        </p>

                        <div class="flex gap-2">
                            <button class="interviewg border  border-[#10B981] text-[#10B981] px-3 py-2 rounded-sm text-sm font-semibold hover:bg-emerald-50 active:scale-80 transition-all duration-300 cursor-pointer">Interview</button>
                            <button class="rejectedr border border-[#EF4444] text-[#EF4444] px-3 py-2 rounded-sm text-sm font-semibold hover:bg-red-50 active:scale-80 transition-all duration-300 cursor-pointer">Rejected</button>
                        </div>
                    </div>

                    <button class="btn-delete text-gray-300 hover:text-red-500 transition-colors">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
        `
        filterSection.appendChild(div)

    }

}
