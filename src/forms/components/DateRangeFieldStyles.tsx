import styled from 'styled-components';
import { lighten } from 'polished';

export const DateRangeFieldStyles = styled.div`
    .SingleDatePickerInput {
        border: none;
        width: 100%;
    }

    .SingleDatePicker {
        width: 100%;
        z-index: 0;
    }

    .DateInput {
        margin-right: 40px;
        margin-bottom: 15px;
    }

    .DateInput_input {
        background: ${p => p.theme.input.background};
        border-radius: ${p => p.theme.input.borderRadius};
        padding: 11px;
    }

    .DayPickerKeyboardShortcuts_buttonReset {
        display: none;
    }

    .DateInput_input__focused {
        border-bottom: 2px solid ${p => p.theme.primaryColor};
    }

    .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover {
        background: ${p => p.theme.primaryColor};
        border: 1px double ${p => p.theme.white};
        color: ${p => p.theme.white};
    }

    .CalendarDay__selected_span {
        background: lighten(${p => p.theme.primaryColor}, 20%);
        border: 1px double ${p => p.theme.white};
        color: ${p => p.theme.white};
    }

    .CalendarDay__hovered_span, .CalendarDay__hovered_span:hover, .CalendarDay__default:hover {
        background: ${p => lighten(0.25, p.theme.primaryColor)};
        border: 1px double ${p => p.theme.white};
        color: ${p => p.theme.white};
    }

    .CalendarDay__selected_span:active, .CalendarDay__selected_span:hover {
        background: ${p => lighten(0.1, p.theme.primaryColor)};
        border: 1px double ${p => p.theme.white};
        color: ${p => p.theme.white};
    }
`;
