import React, { useState } from 'react'
import './template.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faHeart, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';


const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <FontAwesomeIcon
      title="Add to favorite"
      className={`absolute add-fav -top-5 right-5 cursor-pointer ${
        isFavorite ? "text-red-500" : "text-white"
      }`}
      icon={faHeart}
      onClick={toggleFavorite}
    />
  );
};

const TemplateContent = () => {
  return (
    <div className='container mx-auto p-[10px] my-36'>
        <div className='grid grid-cols-4 gap-6'>
          <div className=''>
            <div className='template-box relative overflow-hidden'>
              <Image className='h-full' src='/images/example-img.jpg' width={500} height={500} alt='Example'/>
              <div className="gradient-bg hidden absolute top-0 left-0 w-full h-full"></div>
              <FavoriteButton />
              <div className='absolute template-button -bottom-10 left-0 w-full bg-white'>
                  <button className='text-center w-1/2 py-2 hover:bg-color-1 hover:text-white'>
                    <FontAwesomeIcon icon={faExpand} />
                    <span className='text-base ms-2'>View page</span>
                  </button>
                  <button className='text-center w-1/2 py-2 hover:bg-color-2 hover:text-white'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span className='text-base ms-2'>Get page</span>
                  </button>
              </div>
            </div>
            <div className='text-base text-gray-600 py-2'>
              <p><strong>Tag :</strong> <span>Template 1</span></p>
              <p><strong>Keywords :</strong> <span>Template 1,</span> <span>Modern,</span> <span>New</span></p>
            </div>
          </div>
          <div className=' '>
            <div className='template-box relative overflow-hidden'>
              <Image className='h-full' src='/images/example-img.jpg' width={500} height={500} alt='Example'/>
              <div className="gradient-bg hidden absolute top-0 left-0 w-full h-full"></div>
              <FavoriteButton />
              <div className='absolute template-button -bottom-10 left-0 w-full bg-white'>
                  <button className='text-center w-1/2 py-2 hover:bg-color-1 hover:text-white'>
                    <FontAwesomeIcon icon={faExpand} />
                    <span className='text-base ms-2'>View page</span>
                  </button>
                  <button className='text-center w-1/2 py-2 hover:bg-color-2 hover:text-white'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span className='text-base ms-2'>Get page</span>
                  </button>
              </div>
            </div>
            <div className='text-base text-gray-600 py-2'>
              <p><strong>Tag :</strong> <span>Template 2</span></p>
              <p><strong>Keywords :</strong> <span>Template 2,</span> <span>Classic,</span> <span>Old</span></p>
            </div>
          </div>
          <div className=' '>
            <div className='template-box relative overflow-hidden'>
              <Image className='h-full' src='/images/example-img.jpg' width={500} height={500} alt='Example'/>
              <div className="gradient-bg hidden absolute top-0 left-0 w-full h-full"></div>
              <FavoriteButton />
              <div className='absolute template-button -bottom-10 left-0 w-full bg-white'>
                  <button className='text-center w-1/2 py-2 hover:bg-color-1 hover:text-white'>
                    <FontAwesomeIcon icon={faExpand} />
                    <span className='text-base ms-2'>View page</span>
                  </button>
                  <button className='text-center w-1/2 py-2 hover:bg-color-2 hover:text-white'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span className='text-base ms-2'>Get page</span>
                  </button>
              </div>
            </div>
            <div className='text-base text-gray-600 py-2'>
              <p><strong>Tag :</strong> <span>Template 3</span></p>
              <p><strong>Keywords :</strong> <span>Template 3,</span> <span>Personal,</span> <span>New</span></p>
            </div>
          </div>
          <div className=' '>
            <div className='template-box relative overflow-hidden'>
              <Image className='h-full' src='/images/example-img.jpg' width={500} height={500} alt='Example'/>
              <div className="gradient-bg hidden absolute top-0 left-0 w-full h-full"></div>
              <FavoriteButton />
              <div className='absolute template-button -bottom-10 left-0 w-full bg-white'>
                  <button className='text-center w-1/2 py-2 hover:bg-color-1 hover:text-white'>
                    <FontAwesomeIcon icon={faExpand} />
                    <span className='text-base ms-2'>View page</span>
                  </button>
                  <button className='text-center w-1/2 py-2 hover:bg-color-2 hover:text-white'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span className='text-base ms-2'>Get page</span>
                  </button>
              </div>
            </div>
            <div className='text-base text-gray-600 py-2'>
              <p><strong>Tag :</strong> <span>Template 4</span></p>
              <p><strong>Keywords :</strong> <span>Template 4,</span> <span>Group,</span> <span>Old</span></p>
            </div>
          </div>
          <div className=' '>
            <div className='template-box relative overflow-hidden'>
              <Image className='h-full' src='/images/example-img.jpg' width={500} height={500} alt='Example'/>
              <div className="gradient-bg hidden absolute top-0 left-0 w-full h-full"></div>
              <FavoriteButton />
              <div className='absolute template-button -bottom-10 left-0 w-full bg-white'>
                  <button className='text-center w-1/2 py-2 hover:bg-color-1 hover:text-white'>
                    <FontAwesomeIcon icon={faExpand} />
                    <span className='text-base ms-2'>View page</span>
                  </button>
                  <button className='text-center w-1/2 py-2 hover:bg-color-2 hover:text-white'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span className='text-base ms-2'>Get page</span>
                  </button>
              </div>
            </div>
            <div className='text-base text-gray-600 py-2'>
              <p><strong>Tag :</strong> <span>Template 5</span></p>
              <p><strong>Keywords :</strong> <span>Template 5,</span> <span>Sale,</span> <span>New</span></p>
            </div>
          </div>
          <div className=' '>
            <div className='template-box relative overflow-hidden'>
              <Image className='h-full' src='/images/example-img.jpg' width={500} height={500} alt='Example'/>
              <div className="gradient-bg hidden absolute top-0 left-0 w-full h-full"></div>
              <FavoriteButton />
              <div className='absolute template-button -bottom-10 left-0 w-full bg-white'>
                  <button className='text-center w-1/2 py-2 hover:bg-color-1 hover:text-white'>
                    <FontAwesomeIcon icon={faExpand} />
                    <span className='text-base ms-2'>View page</span>
                  </button>
                  <button className='text-center w-1/2 py-2 hover:bg-color-2 hover:text-white'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span className='text-base ms-2'>Get page</span>
                  </button>
              </div>
            </div>
            <div className='text-base text-gray-600 py-2'>
              <p><strong>Tag :</strong> <span>Template 6</span></p>
              <p><strong>Keywords :</strong> <span>Template 6,</span> <span>Fashion,</span> <span>Old</span></p>
            </div>
          </div>
          <div className=' '>
            <div className='template-box relative overflow-hidden'>
              <Image className='h-full' src='/images/example-img.jpg' width={500} height={500} alt='Example'/>
              <div className="gradient-bg hidden absolute top-0 left-0 w-full h-full"></div>
              <FavoriteButton />
              <div className='absolute template-button -bottom-10 left-0 w-full bg-white'>
                  <button className='text-center w-1/2 py-2 hover:bg-color-1 hover:text-white'>
                    <FontAwesomeIcon icon={faExpand} />
                    <span className='text-base ms-2'>View page</span>
                  </button>
                  <button className='text-center w-1/2 py-2 hover:bg-color-2 hover:text-white'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span className='text-base ms-2'>Get page</span>
                  </button>
              </div>
            </div>
            <div className='text-base text-gray-600 py-2'>
              <p><strong>Tag :</strong> <span>Template 7</span></p>
              <p><strong>Keywords :</strong> <span>Template 7,</span> <span>,</span> <span>New</span></p>
            </div>
          </div>
          <div className=' '>
            <div className='template-box relative overflow-hidden'>
              <Image className='h-full' src='/images/example-img.jpg' width={500} height={500} alt='Example'/>
              <div className="gradient-bg hidden absolute top-0 left-0 w-full h-full"></div>
              <FavoriteButton />
              <div className='absolute template-button -bottom-10 left-0 w-full bg-white'>
                  <button className='text-center w-1/2 py-2 hover:bg-color-1 hover:text-white'>
                    <FontAwesomeIcon icon={faExpand} />
                    <span className='text-base ms-2'>View page</span>
                  </button>
                  <button className='text-center w-1/2 py-2 hover:bg-color-2 hover:text-white'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span className='text-base ms-2'>Get page</span>
                  </button>
              </div>
            </div>
            <div className='text-base text-gray-600 py-2'>
              <p><strong>Tag :</strong> <span>Template 8</span></p>
              <p><strong>Keywords :</strong> <span>Template 8,</span> <span>Sale,</span> <span>Old</span></p>
            </div>
          </div>
          <div className=' '>
            <div className='template-box relative overflow-hidden'>
              <Image className='h-full' src='/images/example-img.jpg' width={500} height={500} alt='Example'/>
              <div className="gradient-bg hidden absolute top-0 left-0 w-full h-full"></div>
              <FavoriteButton />
              <div className='absolute template-button -bottom-10 left-0 w-full bg-white'>
                  <button className='text-center w-1/2 py-2 hover:bg-color-1 hover:text-white'>
                    <FontAwesomeIcon icon={faExpand} />
                    <span className='text-base ms-2'>View page</span>
                  </button>
                  <button className='text-center w-1/2 py-2 hover:bg-color-2 hover:text-white'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span className='text-base ms-2'>Get page</span>
                  </button>
              </div>
            </div>
            <div className='text-base text-gray-600 py-2'>
              <p><strong>Tag :</strong> <span>Template 9</span></p>
              <p><strong>Keywords :</strong> <span>Template 9,</span> <span>Classic,</span> <span>Old</span></p>
            </div>
          </div>
          <div className=' '>
            <div className='template-box relative overflow-hidden'>
              <Image className='h-full' src='/images/example-img.jpg' width={500} height={500} alt='Example'/>
              <div className="gradient-bg hidden absolute top-0 left-0 w-full h-full"></div>
              <FavoriteButton />
              <div className='absolute template-button -bottom-10 left-0 w-full bg-white'>
                  <button className='text-center w-1/2 py-2 hover:bg-color-1 hover:text-white'>
                    <FontAwesomeIcon icon={faExpand} />
                    <span className='text-base ms-2'>View page</span>
                  </button>
                  <button className='text-center w-1/2 py-2 hover:bg-color-2 hover:text-white'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span className='text-base ms-2'>Get page</span>
                  </button>
              </div>
            </div>
            <div className='text-base text-gray-600 py-2'>
              <p><strong>Tag :</strong> <span>Template 10</span></p>
              <p><strong>Keywords :</strong> <span>Template 10,</span> <span>Tech,</span> <span>New</span></p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TemplateContent