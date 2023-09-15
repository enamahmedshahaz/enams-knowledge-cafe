import PropTypes from 'prop-types';

const SpentReadingTime = ({readingTime}) => {
    return (
        <div className=" bg-purple-100  rounded-lg mt-5 p-4 mb-4 border border-[#6047EC] ">
            <h2 className="text-xl text-[#6047EC] font-bold">Spent time on Read: {readingTime}</h2>
        </div>
    );
};

export default SpentReadingTime;

SpentReadingTime.propTypes = {
    readingTime: PropTypes.number.isRequired
}

