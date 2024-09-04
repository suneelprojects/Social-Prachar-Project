import React, { useState } from 'react'
import EnrollDetailsStyle from'./enrollDetails.module.css';
const EnrollDetails = () => {
  const [subCategory,setSubCategory]=useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subOptions, setSubOptions] = useState([]);

  const [Name,setName]=useState('');
  const [Email,setEmail]=useState('');
  const [Number,setNumber]=useState('');
  const [submit ,setSubmit]=useState({name:'',
    email:'',
    mobileNumber:'',
    mainCourse:'',
    subCourse:''
  })

  const handleSubCategory=(event)=>{
    const value=event.target.value;
    setSubCategory(value);
  }

  // Define the main options with corresponding sub-options

  const mainOptions = {
    'Web Development': [
      'Full Stack Java',
      'Full Stack Python',
      'MERN Stack',
      'UI UX',
      'Advanced Full Stack',
    ],
    'Analytics': [
      'Data Analytics','Data Science','Artificial Intelligence','Generative AI'],
    'Marketing' :[
        'Digital Marketing ','SEO','Digital Marketing with AI Tools'
      ],

    'Accounting':[
      'Advanced Tally ','Taxation','GST Filing'
    ],
    'Finance':[
      'Finance Literacy','Banking, Capital Market and Investments'
      ]
  };

  // Handle change for the first dropdown
  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);
    setSubOptions(mainOptions[selected] || []);
  };
  const handleMobileNumber=(event)=>{
    const value=event.target.value;
    setNumber(value);
  }
  const handleEmail=(event)=>{
    const value=event.target.value;
    setEmail(value);
  }
  const handleName=(event)=>{
    const value=event.target.value;
    setName(value);
  }
  const handleSubmit=()=>{
    setSubmit({
      name:Name,
      email:Email,
      mobileNumber:Number,
      mainCourse:selectedCategory,
      subCourse:subCategory
    })
    console.log(submit)
  }
  return (
    <div className={`container mb-5`}>
    <div className=' row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'> 
        <div className={`col ${EnrollDetailsStyle.infoAboutUser}`}>
          <p>Please Provide Some Information About You</p>
        </div>
        <div className={` ${EnrollDetailsStyle.detailsContainer}`}>

      <form className='col ms-2'>
        <div className={EnrollDetailsStyle.inputDivs}>
        <label htmlFor="inputForText" className="form-label">Name :</label>
        <input type='text' className='form-control' onChange={handleName} placeholder='john'/>
        </div>

        {
          Name.length>2 && (
        <div className={EnrollDetailsStyle.inputDivs}>
        <label htmlFor="inputForText" className="form-label">Email :</label>
        <input type='email'className='form-control' onChange={handleEmail} placeholder='john@gmail.com'/>
        </div>
          )
        }

        {
          Email.includes('@') && (
        <div className={EnrollDetailsStyle.inputDivs}>
        <label htmlFor="inputForText" className="form-label">Mobile No :</label>
        <input type='number' className='form-control' onChange={handleMobileNumber} placeholder=''/>
        </div>
          )
        }

        {
          Number.length>9 && (
        <div className={EnrollDetailsStyle.inputDivs}>
        <label htmlFor="inputForText" className="form-label">select your course : </label>
        <select className='form-select' value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        <option value="Web Development">Web Development</option>
        <option value="Analytics">Analytics</option> 
        <option value="Marketing">Marketing</option>
        <option value="Accounting">Accounting </option>
        <option value="Finance">Finance</option>
        <option value="HR Analytics Certification">HR Analytics Certification</option>
      </select>
        </div>
          )
        }

        {subOptions.length > 0 && (
        <div className={EnrollDetailsStyle.inputDivs}>
        <label htmlFor="inputForText" className="form-label">select your domain : </label>
        <select className='form-select' onChange={handleSubCategory}>
          <option value="">Select Sub-Option</option>
          {subOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        </div>
      )}
      {
        selectedCategory.length >0 && (
          <button className={` ${EnrollDetailsStyle.submitBtn}`} onClick={handleSubmit}>submit</button>
        )
      }
      </form>
      </div>
    </div>
    </div>
  )
}

export default EnrollDetails
