import { cx } from '@/lib/utils';
import './Tabs.css';

export const Tabs = ({ className, ...props }) => (
  <div className={cx('tabs', className)} {...props} />
);

export const TabsList = ({ className, ...props }) => (
  <div className={cx('tabs-list', className)} role='tablist' {...props} />
);

export const TabsTrigger = ({
  value,
  isActive,
  onValueChange,
  className,
  ...props
}) => (
  <button
    type='button'
    className={cx('tabs-trigger', 'font-medium', className)}
    role='tab'
    id={`tab-${value}`}
    aria-selected={isActive}
    aria-controls={`panel-${value}`}
    tabIndex={isActive ? 0 : -1}
    onClick={() => onValueChange(value)}
    {...props}
  />
);

export const TabsContent = ({ value, className, ...props }) => {
  return (
    <div
      className={cx('tabs-content', className)}
      role='tabpanel'
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      {...props}
    />
  );
};
