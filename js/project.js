// Job Data
let jobs = [
    { id: 1, companyName: "TechFlow", position: "Frontend Developer", location: "Dhaka", type: "Full-time", salary: "$50k - $70k", description: "Expertise in React and Tailwind required.", status: "All" },
    { id: 2, companyName: "Innovate Ltd", position: "UI/UX Designer", location: "Remote", type: "Contract", salary: "$40k", description: "Designing sleek user interfaces for mobile apps.", status: "All" },
    { id: 3, companyName: "DevSquad", position: "Backend Engineer", location: "Sylhet", type: "Full-time", salary: "$60k", description: "Node.js and MongoDB specialist needed.", status: "All" },
    // Eivabe baki jobs-gulo add koro (minimum 8 cards)
];

let currentTab = 'All';

// Function to Render Jobs
function renderJobs() {
    const container = document.getElementById('jobs-container');
    const filteredJobs = jobs.filter(job => currentTab === 'All' ? true : job.status === currentTab);
    
    container.innerHTML = '';

    if (filteredJobs.length === 0) {
        container.innerHTML = `
            <div class="col-span-full flex flex-col items-center py-20 text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png" class="w-20 mb-4 opacity-30" />
                <h3 class="text-xl font-semibold">No jobs Available</h3>
                <p class="text-gray-500">You haven't added any jobs to this category yet.</p>
            </div>`;
    } else {
        filteredJobs.forEach(job => {
            container.innerHTML += `
                <div class="card bg-white shadow-xl border border-gray-100">
                    <div class="card-body">
                        <div class="flex justify-between">
                            <h2 class="card-title text-primary">${job.companyName}</h2>
                            <button onclick="deleteJob(${job.id})" class="btn btn-ghost btn-xs text-error">Delete</button>
                        </div>
                        <p class="font-medium">${job.position}</p>
                        <div class="flex gap-2 my-2">
                            <span class="badge badge-ghost">${job.type}</span>
                            <span class="badge badge-ghost">${job.location}</span>
                        </div>
                        <p class="text-sm text-gray-600">${job.description}</p>
                        <p class="font-bold text-success mt-2">${job.salary}</p>
                        <div class="card-actions justify-end mt-4">
                            <button onclick="updateStatus(${job.id}, 'Interview')" class="btn btn-sm btn-success text-white ${job.status === 'Interview' ? 'btn-disabled' : ''}">Interview</button>
                            <button onclick="updateStatus(${job.id}, 'Rejected')" class="btn btn-sm btn-error text-white ${job.status === 'Rejected' ? 'btn-disabled' : ''}">Rejected</button>
                        </div>
                    </div>
                </div>`;
        });
    }
    updateCounts();
}

// Function to Update Status
function updateStatus(id, newStatus) {
    const jobIndex = jobs.findIndex(j => j.id === id);
    jobs[jobIndex].status = newStatus;
    renderJobs();
}

// Function to Delete Job
function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    renderJobs();
}

// Update Dashboard Counts
function updateCounts() {
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'Interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'Rejected').length;
    document.getElementById('total-jobs-count').innerText = `Total: ${jobs.length}`;
}

// Tab Switching
function filterJobs(tab, element) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
    element.classList.add('tab-active');
    renderJobs();
}

// Initial Load
renderJobs();