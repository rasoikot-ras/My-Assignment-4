let interViewlist = [];
let rejectedList = [];




let total = document.getElementById('total');
let interView = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allFilterBtn = document.getElementById('btn-all');
const interViewBtn = document.getElementById('btn-interview');
const rejectedViewBtn = document.getElementById('btn-rejected');



const allCardSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main');

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


}



mainContainer.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector('.job-name').innerText;
    const jobPost = parentNode.querySelector('.job-post').innerText;
    const jobInfo = parentNode.querySelector('.information').innerText;
    const jobStatus = parentNode.querySelector('.status').innerText;
    const jobNotes = parentNode.querySelector('.notes').innerText;
    // const job = parentNode.querySelector('.notes').innerText;

    const cardInfo = {
        jobName,
        jobPost,
        jobInfo,
        jobStatus,
        jobNotes
    }
    
    const jobExist = interViewlist.find(item=> item.jobName == cardInfo.jobName)
    if(!jobExist ){
        interViewlist.push(cardInfo)
    }
    console.log()
})
