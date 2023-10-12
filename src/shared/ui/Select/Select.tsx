import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

interface OptionsObj {
    value: string,
    option: string,
}

interface SelectProps {
    disabled?: boolean;
    className?: string;
    label?: string;
    value?: string;
    options?: OptionsObj[];
    onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
    const {
        disabled = false,
        className,
        label,
        onChange,
        value,
        options,
    } = props;

    const mods: Mods = {
    };

    const onSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionList = useMemo(() => (
        options?.map((opt) => (
            <option
                className={cls.Option}
                key={opt.value}
                value={opt?.value}
            >
                {opt.value}
            </option>
        ))), [options]);

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.Label}>
                    {label}
                </span>
            )}
            <select
                disabled={disabled}
                onChange={onSelect}
                className={cls.Select}
                value={value}
            >
                {optionList}
            </select>
        </div>
    );
});
