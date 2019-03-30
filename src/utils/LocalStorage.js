/**
 * Check local storage isAvailable or not.
 */
const isAvailable = (function isAvailableIffe() {
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}());

const util = {
    /**
     * Get data from local storage.
     * @param {String} key key name
     */
    get(key) {
        if (isAvailable) {
            const data = localStorage.getItem(key);

            return data ? JSON.parse(data) : null;
        }

        return null;
    },

    /**
     * Set data in local storage.
     * @param {String} key key name
     * @param {String} value value
     */
    set(key, value) {
        if (isAvailable) {
            return localStorage.setItem(key, JSON.stringify(value));
        }

        return null;
    },

    /**
     * Remove data from local storage.
     * @param {String} key key name
     */
    remove(key) {
        if (isAvailable) {
            return localStorage.removeItem(key);
        }

        return null;
    },

    /**
     * Clear local storage.
     */
    clear() {
        if (isAvailable) {
            return localStorage.clear();
        }

        return null;
    },
};

export default util;



