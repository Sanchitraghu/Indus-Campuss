//bar graph data
export const graphArrayElements = [
    {
        heading:"User Demographics: Registered Students, Companies, and Industries on Our Portal",
        data:{
            labels: ["Students","Companies","Colleges"],
            datasets: [
              {
                 label: 'Numbers',
                data: ["150","88","60"],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',  
                borderWidth: 1,
                barPercentage: 2,  // Control the width of the bars
                categoryPercentage: 0.3,  // Control the width of the bars
              },
            ],
          },
          option:{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
            },
            scales: {
                y: {
                  title: {
                    display: true,
                    text: 'Numbers',
          
                },
                
              },
          }}
    },
    {
        heading:"Number of projects the registered companies posted",
       data: {
        labels: ["Infosys", "TCS", "Delloitte","Capgemini","IBM", "Oracle","Wipro"],
        datasets: [
          {
             label: 'Numbers',
             data: ["40", "23", "34","15","17","8", "25"],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',  
            borderWidth: 1,
            barPercentage: 2,  // Control the width of the bars
            categoryPercentage: 0.4,  // Control the width of the bars
          },
        ],
      },
      option:{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Number of projects posted',  // Y-axis label
                },
                
            },
            
        },
    } 
},
{
    heading:"Number of project completed by registered college",
    data:{
        labels: ["LNCT","SATI","SIRT","DAVV","SGSITS"],
        datasets: [
          {
            label: 'Numbers',
            data: ["40", "23", "34","15","10"],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',  
            borderWidth: 1,
            barPercentage: 2,  // Control the width of the bars
            categoryPercentage: 0.4,  // Control the width of the bars
          },
        ],
      },
      option: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
            y: {
              title: {
                display: true,
                text: 'Number of projects completed',  // Y-axis label
              },
      
            },
            
          },
      }
},
]
export const allRolesData = {
    labels: ["Students","Companies","Colleges"],
    datasets: [
      {
         label: 'Numbers',
        data: ["150","88","60"],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',  
        borderWidth: 1,
        barPercentage: 2,  // Control the width of the bars
        categoryPercentage: 0.3,  // Control the width of the bars
      },
    ],
  };
  
  export const IndustryData= {
    labels: ["Infosys", "TCS", "Delloitte","Capgemini","IBM", "Oracle","Wipro"],
    datasets: [
      {
         label: 'Numbers',
        data: ["40", "23", "34","15","17","8", "25"],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',  
        borderWidth: 1,
        barPercentage: 2,  // Control the width of the bars
        categoryPercentage: 0.4,  // Control the width of the bars
      },
    ],
  };
  
  export const CollegeData={
    labels: ["LNCT","SATI","SIRT","DAVV","SGSITS"],
    datasets: [
      {
        label: 'Numbers',
        data: ["40", "23", "34","15","10"],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',  
        borderWidth: 1,
        barPercentage: 2,  // Control the width of the bars
        categoryPercentage: 0.4,  // Control the width of the bars
      },
    ],
  };
  
  // Configuration options for the chart
  export const allRoles_Options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
        y: {
          title: {
            display: true,
            text: 'Numbers',
  
        },
        
      },
  }};

  export const Ind_Options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
        y: {
          title: {
            display: true,
            text: 'Number of projects posted',  // Y-axis label
          },
  
        },
        
      },
  };

  export const college_options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
        y: {
          title: {
            display: true,
            text: 'Number of projects completed',  // Y-axis label
          },
  
        },
        
      },
  };