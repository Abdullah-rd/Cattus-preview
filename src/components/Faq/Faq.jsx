import PropTypes from 'prop-types';

export default function Faq(props){

return (
    <div className="collapse bg-base-200 collapse-arrow focus:bg-primary focus:text-primary-content">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
    {props.question}
  </div>
  <div className="collapse-content "> 
    <p>{props.answer}</p>
  </div>
</div>
)

}
Faq.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  };