import React, { useState } from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'
import sInput from './common/c1-SuperInputText/SuperInputText.module.css'
import sBtn from './common/c2-SuperButton/SuperButton.module.css'
import sCheck from './common/c3-SuperCheckbox/SuperCheckbox.module.css'

const Stand = () => {
    const [stateForAllInputs, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const [stateForAllCheckboxes, setChecked] = useState<boolean>(false)

    return (
        <div id={'hw4-stand'} className={s.stand}>
            <div className={s.inputs}>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperInputText
                        className={sInput.input}
                        id={'hw4-super-input-like-old'}
                        value={stateForAllInputs}
                        onChange={(e) => setValue(e.currentTarget.value)}
                    />
                </div>
                {/*инпут с ошибкой:*/}
                <div>
                    <SuperInputText
                    className={sInput.input}
                        id={'hw4-super-input-with-error'}
                        value={stateForAllInputs}
                        onChangeText={setValue}
                        error={error}
                        onEnter={() => {
                            setError(

                                stateForAllInputs.trim()
                                    ? ''
                                    : 'Error'
                            )
                            setValue('')
                        }}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                {/*обычная кнопка:*/}
                <div>
                    <SuperButton
                        className={sBtn.default}
                        id={'hw4-super-button-default'}>
                        default
                    </SuperButton>
                </div>
                {/*красная кнопка:*/}
                <div>
                    <SuperButton
                        className={sBtn.red}
                        id={'hw4-super-button-red'} xType={'red'}>
                        red
                    </SuperButton>
                </div>
                {/*задизэйбленная кнопка:*/}
                <div>
                    <SuperButton
                        className={sBtn.disabled}
                        id={'hw4-super-button-disabled'}
                        xType={'red'}
                        disabled
                    >
                        disabled
                    </SuperButton>
                </div>
                {/*задизэйбленная кнопка:*/}
                <div>
                    <SuperButton
                        className={sBtn.secondary}
                        id={'hw4-super-button-secondary'}
                        xType={'secondary'}
                    >
                        secondary
                    </SuperButton>
                </div>
            </div>

            <div className={s.checkboxes}>
                {/*чекбокс с текстом:*/}
                <div>
                    <SuperCheckbox
                        className={sCheck.checkbox}
                        id={'hw4-super-checkbox-with-text'}
                        checked={stateForAllCheckboxes}
                        onChangeChecked={setChecked}
                    >
                        some text
                    </SuperCheckbox>
                </div>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperCheckbox
                        className={sCheck.checkbox}
                        id={'hw4-super-checkbox-like-old'}
                        checked={stateForAllCheckboxes}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stand
