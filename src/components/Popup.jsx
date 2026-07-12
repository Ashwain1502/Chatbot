import PropTypes from 'prop-types';

const Popup = ({ isOpen, onClose, content, onOptionClick, onGoBack, canGoBack }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-[#151718] text-white p-5 rounded-lg w-[70%] h-[70%] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          &times;
        </button>
        {canGoBack && (
          <button
            onClick={onGoBack}
            className="absolute top-3 left-3 text-xl font-bold"
          >
            &larr;
          </button>
        )}
        <div className="overflow-y-auto h-full pt-10">
          <h2 className="text-2xl mb-4">{content.title}</h2>
          {content.options && content.options.length > 0 ? (
            content.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onOptionClick(option)}
                className="block w-full text-left p-3 mb-2 bg-[#1E1E1E] rounded hover:bg-[#494949]"
              >
                {option.label}
              </button>
            ))
          ) : (
            <p className="text-lg">No more options available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

Popup.defaultProps = {
  isOpen: false,
  onClose: () => {},
  content: { title: '', options: [] },
  onOptionClick: () => {},
  onGoBack: () => {},
  canGoBack: false,
};

Popup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  content: PropTypes.shape({
    title: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        next: PropTypes.string,
      })
    ),
  }),
  onOptionClick: PropTypes.func,
  onGoBack: PropTypes.func,
  canGoBack: PropTypes.bool,
};

export default Popup;
