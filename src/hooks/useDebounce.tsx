import { useEffect, useState } from "react";

// Пользовательский хук, добавляющий задержку перед применением изменений к значению.
// Этот хук полезен, когда мы хотим уменьшить частоту обновлений в ответ на частые изменения.
// Возвращает дебаунсированное значение.
const useDebounce = <T,>(value: T, delay?: number): T => {
  // Используем useState для хранения дебаунсированного значения
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Создаем таймер, который будет запущен после указанной задержки (или используем 500 мс по умолчанию)
    const timer = setTimeout(() => {
      // Устанавливаем дебаунсированное значение в предоставленное значение
      setDebouncedValue(value);
    }, delay || 500);

    // Очищаем таймер при изменении значения или задержки
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  // Возвращаем дебаунсированное значение после задержки
  return debouncedValue;
};

export default useDebounce;
