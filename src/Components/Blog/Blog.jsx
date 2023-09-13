import PropTypes from 'prop-types'; // ES6

import { BsBookmarkFill } from 'react-icons/bs'; // https://react-icons.github.io/react-icons


const Blog = ({ blog, handleAddToBookmark }) => {

    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;

    return (
        <div className='mb-5 border-b-2'>

            <img className='w-full rounded-lg mb-2' src={cover} alt={`cover photo of blog tittle ${title}`} />

            <div className='flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt={`Author image of post ${title}`} />
                    <div className='ml-2'>
                        <h3 className='font-bold'>{author}</h3>
                        <p className='text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p className='text-sm'> {reading_time} min read
                    </p>

                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'> <BsBookmarkFill></BsBookmarkFill> </button>

                </div>
            </div>

            <h2 className='text-3xl font-bold ml-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span className='text-xs text-gray-500' key={idx}><a href="">#{hashtag}</a></span>)
                }
            </p>

        </div>
    );
};


//https://www.npmjs.com/package/prop-types

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;