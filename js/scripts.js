// Для страницы My Grades
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.grades-table')) {
        const gradesData = [
            { course: "Mathematics", grade: "A", credits: 3 },
            { course: "English", grade: "B+", credits: 4 },
            { course: "History", grade: "A-", credits: 3 },
            { course: "Science", grade: "B", credits: 4 }
        ];
        
        const container = document.querySelector('.grades-table');
        let html = `
            <table class="grades-table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        gradesData.forEach(item => {
            html += `
                <tr>
                    <td>${item.course}</td>
                    <td>${item.grade}</td>
                    <td>${item.credits}</td>
                </tr>
            `;
        });
        
        html += `</tbody></table>`;
        container.innerHTML = html;
    }
    
    // Для страницы Timetable
    if (document.getElementById('calendar')) {
        const calendarEl = document.getElementById('calendar');
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'timeGridWeek',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: [
                {
                    title: 'English Class',
                    daysOfWeek: [1, 3],
                    startTime: '09:00',
                    endTime: '11:00',
                    color: '#4d65ff'
                },
                {
                    title: 'Mathematics',
                    daysOfWeek: [2, 4],
                    startTime: '13:00',
                    endTime: '15:00',
                    color: '#ff6b4d'
                },
                {
                    title: 'Workshop',
                    daysOfWeek: [5],
                    startTime: '10:00',
                    endTime: '12:00',
                    color: '#6d4dff'
                }
            ]
        });
        calendar.render();
    }
});