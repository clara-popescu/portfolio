const AIRTABLE_API_KEY = 'patpZ7OQfvzJar2QP.97bfdbbb30366c77aeb8b206a34650cec40c591919a0d8510b1da2f39792a0f8';
const BASE_ID = 'appZfK92lNK1nrA4I';
const TABLE_NAME = 'sheet';

const apiUrl = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

// fetch data from airtable taken from ChatGPT
async function fetchAirtableData() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching data from Airtable');
        }

        const data = await response.json();

        for (let i=0; i< data.records.length; i++) {
            const oneRecord = data.records[i];

            // creating one card for each project - a tag that acts as a div
            const divChild = document.createElement("a");
            const projectLink = oneRecord.fields.Link; 
            divChild.href = projectLink;
            divChild.target = "_blank";
            divChild.id = "link";

            document.getElementById("projects-card-wrapper").appendChild(divChild);
            divChild.id = `divChild${i}`;
            divChild.classList.add("divChild");

            // image
            const imageLink = oneRecord.fields.Image[0].url;  
            const img = document.createElement("img");
            img.src = imageLink;
            document.getElementById(`divChild${i}`).append(img);

            // project name
            const projectName = document.createElement("h2");
            projectName.textContent = oneRecord.fields.ProjectName;
            document.getElementById(`divChild${i}`).append(projectName);

            // project date
            const projectDate = document.createElement("h4");
            projectDate.textContent = oneRecord.fields.Date;
            document.getElementById(`divChild${i}`).append(projectDate);

            // document.body.append(oneRecord.fields.Date);
            // document.body.append(oneRecord.fields.ProjectName);
            // document.body.append(img);

        }

    } catch (error) {
        console.error('Error:', error);
    }
    
}

fetchAirtableData();