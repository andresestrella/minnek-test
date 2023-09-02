# reverses the characters in an array of chars but leaves special characters in place
def reverseArrayChars(array):
    if len(array) == 0:
        return array

    left = 0
    right = len(array) - 1

    while left <= right:
        leftVal = str(array[left])
        rightVal = str(array[right])
        if leftVal.isalnum() and rightVal.isalnum():
            array[left], array[right] = array[right], array[left]
            left += 1
            right -= 1

        elif not leftVal.isalnum():
            left += 1

        elif not rightVal.isalnum():
            right -= 1
    return array
