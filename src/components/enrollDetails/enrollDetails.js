import React, { useState } from 'react';
import EnrollDetailsStyle from './enrollDetails.module.css';
import axios from 'axios';


const EnrollDetails = () => {
  const [subCategory, setSubCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subOptions, setSubOptions] = useState([]);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Number, setNumber] = useState('');

  const mainOptions = {
    'Web Development': [
      'Full Stack Java',
      'Full Stack Python',
      'MERN Stack',
      'UI UX',
      'Advanced Full Stack',
    ],
    Analytics: ['Data Analytics', 'Data Science', 'Artificial Intelligence', 'Generative AI'],
    Marketing: ['Digital Marketing', 'SEO', 'Digital Marketing with AI Tools'],
    Accounting: ['Advanced Tally', 'Taxation', 'GST Filing'],
    Finance: ['Finance Literacy', 'Banking, Capital Market and Investments'],
  };

  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);
    setSubOptions(mainOptions[selected] || []);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      Name: Name,  
      Email: Email,
      Phone: Number,
      Course: selectedCategory,
      SubCourse: subCategory,
    };
  
    const response=axios.post('https://sheetdb.io/api/v1/blejvvkofk6b1', submissionData, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if (response.data.created === 1) {
          alert('Form submitted successfully!');
        } else {
          alert('Form submission failed!');
        }
        console.log(response)

      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Form submission failed!');
      });

      setName('');
      setEmail('')
      setNumber('')
      setSelectedCategory('')
      setSubOptions('')
      setSubCategory('')
  };
  
  
  return (
    <div className={`container mb-5`}>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
        <div className={`col ${EnrollDetailsStyle.infoAboutUser}`}>
          <p>Please Provide Some Information About You</p>
        </div>
        <div className={`${EnrollDetailsStyle.detailsContainer}`}>
          <form className="col ms-2" onSubmit={handleSubmit}>
            <div className={EnrollDetailsStyle.inputDivs}>
              <label htmlFor="inputForText" className="form-label">
                Name :
              </label>
              <input
                type="text"
                className="form-control"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                placeholder="john"
                required
              />
            </div>

            {Name.length > 2 && (
              <div className={EnrollDetailsStyle.inputDivs}>
                <label htmlFor="inputForEmail" className="form-label">
                  Email :
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@gmail.com"
                  required
                />
              </div>
            )}

            {Email.includes('@') && (
              <div className={EnrollDetailsStyle.inputDivs}>
                <label htmlFor="inputForNumber" className="form-label">
                  Mobile No :
                </label>
                <input
                  type="tel"
                  className="form-control"
                  value={Number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder=""
                  required
                />
              </div>
            )}

            {Number.length > 9 && (
              <div className={EnrollDetailsStyle.inputDivs}>
                <label htmlFor="inputForCategory" className="form-label">
                  Select your course :
                </label>
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Analytics">Analytics</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
            )}

            {subOptions.length > 0 && (
              <div className={EnrollDetailsStyle.inputDivs}>
                <label htmlFor="inputForSubCategory" className="form-label">
                  Select your domain :
                </label>
                <select
                  className="form-select"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  required
                >
                  <option value="">Select Sub-Option</option>
                  {subOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedCategory && (
              <button className={`${EnrollDetailsStyle.submitBtn}`} type="submit">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollDetails;
