import unittest
from task1 import reverseArrayChars


class TestReverseArrayChars(unittest.TestCase):

    def test_reverseArrayChars(self):
        self.assertEqual(
            reverseArrayChars(['n', 2, '&', 'a', 'l', 9, '$', 'q', 47, 'i', 'a', 'j', 'b', 'z', '%', 8]),
            [8, 'z', '&', 'b', 'j', 'a', '$', 'i', 47, 'q', 9, 'l', 'a', 2, '%', 'n'])
        self.assertEqual(reverseArrayChars(['b', '%', 'a']), ['a', '%', 'b'])
        self.assertEqual(reverseArrayChars([]), [])
        self.assertEqual(reverseArrayChars(['a']), ['a'])
        self.assertEqual(reverseArrayChars(['a', 'b']), ['b', 'a'])
        self.assertEqual(reverseArrayChars(['a', 'b', 'c']), ['c', 'b', 'a'])
        self.assertEqual(reverseArrayChars(['a', 'b', 'c', 'd']), ['d', 'c', 'b', 'a'])
        self.assertEqual(reverseArrayChars(['!', '@', '#']), ['!', '@', '#'])


if __name__ == '__main__':
    unittest.main()
