import { cx } from '../../lib/utils.js';

export const Tabs = ({ children, className, ...props }) => (
  <div className={cx('tabs', className)} {...props}>
    {children}
  </div>
);

export const TabsList = ({ children, className, ...props }) => (
  <div className={cx('tabs-list', className)} role='tablist' {...props}>
    {children}
  </div>
);

export const TabsTrigger = ({
  children,
  value,
  isActive,
  onValueChange,
  className,
  ...props
}) => (
  <button
    type='button'
    className={cx('tabs-trigger', className)}
    role='tab'
    id={`tab-${value}`}
    aria-selected={isActive}
    aria-controls={`panel-${value}`}
    tabIndex={isActive ? 0 : -1}
    onClick={() => onValueChange(value)}
    {...props}
  >
    {children}
  </button>
);

export const TabsContent = ({ children, value, className, ...props }) => {
  return (
    <div
      className={cx('tabs-content', className)}
      role='tabpanel'
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      {...props}
    >
      {children}
    </div>
  );
};
