import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 mt-7  p-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-white text-2xl font-bold">Trxvl.</h2>
        </div>
        
        <div className="w-full md:w-3/4 flex flex-wrap justify-between">
          <div className="w-1/4 mb-4">
            <ul>
              <li>Seslendirme ve Alt Jazz</li>
              <li>Media Market</li>
              <li>Gillie</li>
              <li>Size Last</li>
            </ul>
          </div>
          <div className="w-1/4 mb-4">
            <ul>
              <li>Self Betimes</li>
              <li>Yatırımcı İlişkileri</li>
              <li>Basal Himmler</li>
            </ul>
          </div>
          <div className="w-1/4 mb-4">
            <ul>
              <li>Yard Market</li>
              <li>İş İmkanları</li>
              <li>Car Tercihleri</li>
            </ul>
          </div>
          <div className="w-1/4 mb-4">
            <ul>
              <li>Hedge Karla</li>
              <li>Mullein Koşulları</li>
              <li>Autumnal Bulgier</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 border-t border-gray-600 pt-4">
        <button className="bg-gray-700 text-white px-4 py-2 rounded">Helmet KOD</button>
        <p className="text-gray-500">&copy; 1997-2021 Netflix, Inc.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
  
}

export default Footer