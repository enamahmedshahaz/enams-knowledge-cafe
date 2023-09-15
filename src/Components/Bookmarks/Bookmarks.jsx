
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
import SpentReadingTime from '../SpentReadingTime/SpentReadingTime';


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (

        <div className="md: w-1/3 bg-slate-100 ml-4 rounded-lg mt-5 p-6">

            <SpentReadingTime readingTime={readingTime}></SpentReadingTime>

            <h2 className='font-bold text-xl text-center mb-5'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}

export default Bookmarks;