#include <stdio.h>
#include <string.h>

int main(void)
{
	char buf[20] = "hello world\n";
	memcpy(buf + 1, buf, 13);
	printf(buf);
	return 0;
}
