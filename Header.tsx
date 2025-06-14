import './Header.css';
import { useState } from 'react';

interface HeaderProps {
  setBgImage: React.Dispatch<React.SetStateAction<string>>;
}

function Header({ setBgImage }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Get today’s date dynamically
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const predefinedImages = [
    "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1170572/pexels-photo-1170572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://source.unsplash.com/1600x900/?technology",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBgImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="header">
        <div className="date">
          <h3 className="dateText">My Day</h3>
          
          <p className="monthDay">{formattedDate}</p>
        </div>
        <div className="listSettings" onClick={() => setIsModalOpen(!isModalOpen)}>
          <span className="material-symbols-outlined">more_horiz</span>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-container">
          <div className="modal">
            <h4>Select Background</h4>
            <div className="predefined-images">
              {predefinedImages.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt="bg"
                  onClick={() => {
                    setBgImage(url);
                    setIsModalOpen(false);
                  }}
                />
              ))}
            </div>
            <div className="upload-section">
              <label className="upload-label">
                Upload Image
                <input type="file" accept="image/*" onChange={handleFileChange} />
              </label>
            </div>
            <button
              className="reset-btn"
              onClick={() => {
                setBgImage("");
                setIsModalOpen(false);
              }}
            >
              Reset Background
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
