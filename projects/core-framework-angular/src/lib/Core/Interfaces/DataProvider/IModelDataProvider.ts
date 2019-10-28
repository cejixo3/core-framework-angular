export interface IModelDataProvider {
    /**
     * Update current Record
     * @return {Promise}
     */
    update(): Promise<any>

    /**
     * Create this record in storage
     * @return {Promise}
     */
    create(): Promise<any>

    /**
     * Remove record from storage
     * @return {Promise}
     */
    remove(): Promise<any>

    /**
     * Find Record over storage
     * @param {string | number} pk
     * @return {Promise}
     */
    find(pk?: string | number): Promise<any>

    /**
     * This method helps for checking does any communication pending or not
     * @return {boolean}
     */
    isWaitingForTransport(): boolean;
}