import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.module.less';

const CHeader = ({ onBack, LeftComponent }: { onBack?: () => void; LeftComponent?: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex-1 ">
        {LeftComponent}
        {onBack && (
          <div
            className="duration-80  w-20 cursor-pointer"
            onClick={(e) => {
              onBack();
            }}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ height: '1.125rem', marginTop: '-0.125rem' }} />
            <span className="text-lg font-semibold leading-4_5">&nbsp;{'Back'}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 items-center justify-center">
        <img src="./images/me_btc_logo.png" className="h-16 select-none" alt="" />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default CHeader;
