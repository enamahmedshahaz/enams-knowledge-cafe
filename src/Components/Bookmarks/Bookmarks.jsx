
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md: w-1/3 bg-slate-300 ml-4 rounded-lg mt-5 p-6">
            <h2 className='font-bold text-2xl text-center mb-5'>Bookmarked Blogs: {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks;