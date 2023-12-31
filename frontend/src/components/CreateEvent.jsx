import React, { useState } from 'react';
import backgroundImage from '../assets/images/background1.png';
import { Button, Label, TextInput, Textarea, Datepicker, FileInput } from 'flowbite-react';
import { BiSolidDrink } from 'react-icons/bi';

function CreateEvent() {
  const containerStyles = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    filter: 'blur(8px)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  };

  const overlayStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const formStyles = {
    width: '100%',
  };

  const inputStyles = {
    width: '100%',
    marginBottom: '10px',
  };

  // State for the date picker
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle date picker changes
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={containerStyles}>
      <img src={backgroundImage} alt="Background" style={backgroundStyles} />
      <div className='"py-8 px-4 mx-auto text-center lg:py-16"' style={overlayStyles}>
        <form className="flex flex-col gap-4" style={formStyles}>
          <div class="mx-auto max-w-screen-xl text-center lg:py-10">
            <h1 class="mb-4 text-4xl font-extrabold tracking-normal leading-none text-gray-900 md:text-5xl lg:text-6xl text-white">
              Create Event
            </h1>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="event" className="text-xl tracking-normal font-bold text-white" value="Event Name"></Label>
            </div>
            <TextInput icon={BiSolidDrink} id="event" placeholder="Whatever you're calling this thing" required type="text" style={inputStyles} />
            <div className="mb-2 block">
              <Label htmlFor="comment" className="text-xl tracking-normal font-bold text-white" value="Description" />
            </div>
            <Textarea id="description" placeholder="Tell me about it" required rows={4} type="text" style={inputStyles} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Date" className="text-xl tracking-normal font-bold text-white" value="When is it?" />
            </div>
            <Datepicker
              id="date"
              selected={selectedDate}
              onChange={handleDateChange}
              placeholderText="Select a date"
              dateFormat="MMMM d, yyyy"
              isClearable
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={15}
              className="w-full p-2 rounded-md focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="file" className="text-xl tracking-normal font-bold text-white" value="Upload Your Flyer" />
            </div>
            <FileInput required id="file" />
          </div>
          <div className="flex items-center gap-2"></div>
          <Button gradientDuoTone="purpleToPink" className="mb-4 text-2xl font-bold" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
