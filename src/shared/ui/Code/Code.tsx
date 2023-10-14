import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    codeProps?: string;
}

export const Code = (props: CodeProps) => {
    const {
        className,
        codeProps,
    } = props;

    return (
        <pre>
            <code className={classNames(cls.Code, {}, [className])}>
                {codeProps}
            </code>
        </pre>
    );
};
